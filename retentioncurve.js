let thetaSatSlider = document.getElementById('theta-sat-slider');
let thetaResSlider = document.getElementById('theta-res-slider');
let alphaSlider = document.getElementById('alpha-slider');
let nSlider = document.getElementById('n-slider');
let mSlider = document.getElementById('m-slider');
let soilTexturalClass = document.getElementById('soil-textural-class');
let linearRadio = document.getElementById('linear-radio');
let logarithmicRadio = document.getElementById('logarithmic-radio');
let resetBtn = document.getElementById('reset-btn');
let ctx = document.getElementById("swrc-chart").getContext("2d");

thetaSatSlider.addEventListener('input',updateChart);
thetaResSlider.addEventListener('input',updateChart);
alphaSlider.addEventListener('input',updateChart);
nSlider.addEventListener('input',updateChart);
mSlider.addEventListener('input',updateChart);
soilTexturalClass.addEventListener('change',updateSoilPar);
linearRadio.addEventListener('change',updateChart);
logarithmicRadio.addEventListener('change',updateChart);
resetBtn.addEventListener('click',resetChart)

let opts = {
    title: {display: false, text: soilTexturalClass.value},
    animation: {duration: 0},
    legend: {display: false},
    scales: {xAxes:[{
                type: 'linear',
                scaleLabel: 'Matric potential (kPa)',
                scaleLabel: {labelString: 'Matric potential (kPa)', display: true}
            }],
            yAxes:[{
                type: 'linear',
                scaleLabel: {labelString: 'Volumetric water content (Volume fraction)', display: true},
                ticks: {suggestedMin: 0, suggestedMax:0.55}
            }]
    }
};

function initialChartSettings(){
    let settings = {data: vanGenuchten(),
                    label: soilTexturalClass.value, // turn display legend to true to display
                    borderColor: 'black',
                    borderWidth: 2,
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    fill: false,
                    tension: 0.25,
                    showLine: true}
    return settings
}

let swrcChart = new Chart(ctx, {
    type: 'scatter', 
    data: {
        datasets: [initialChartSettings()]
    },
    options: opts
});


function vanGenuchten(){
    let startMatric = 0; //log10
    let endMatric = 4; //log10
    let step = 0.2; //log10 range
    let theta_sat = parseFloat(thetaSatSlider.value);
    let theta_res = parseFloat(thetaResSlider.value);
    let alpha = parseFloat(alphaSlider.value);
    let n = parseFloat(nSlider.value);
    let m = parseFloat(mSlider.value);
    let data = [];

    for(let i = startMatric; i < endMatric; i += step){
        matric = Math.round(Math.pow(10,i));
        theta = theta_res + (theta_sat - theta_res) / (1 + (alpha * matric)**n)**m
        theta = Math.round(theta*1000) / 1000 ;
        data.push({x:matric, y:theta })
    }
    return data;
}

function updateSoilPar(){
    let currentTexture = soilTexturalClass.value;
    thetaSatSlider.value = soilPar[currentTexture].thetaSat;
    thetaResSlider.value = soilPar[currentTexture].thetaRes;
    alphaSlider.value = soilPar[currentTexture].alpha
    nSlider.value = soilPar[currentTexture].n
    mSlider.value = 1-1/soilPar[currentTexture].n

    updateChart()
}

function updateChart(){
    swrcChart.options.scales.xAxes[0].type = getAxisScale();
    if(document.getElementById('track-changes-checkbox').checked){
        appendChart()
    } else {
        if(swrcChart.data.datasets.length > 1){
            resetChart()
        }
        swrcChart.data.datasets[0].data = vanGenuchten();
    }
    swrcChart.update(1000);

}

function getAxisScale(){
    let radios = document.getElementsByName('radio-axis');
    for(let i=0; radios.length; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
}

function resetChart(){
    swrcChart.data.datasets = [initialChartSettings()];
    swrcChart.update(100);

}

function appendChart(){
    swrcChart.data.datasets.push( {data: vanGenuchten(),
        borderColor: randomColor(),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
        tension: 0.25,
        showLine: true} );
}

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
};