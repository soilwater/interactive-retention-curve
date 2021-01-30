soilPar = {
    units: {texturalClass:'USDA class', thetaRes:'cm^3/cm^3', thetaSat:'cm^3/cm^3', alpha:'1/cm', n:'unitless', Ksat:'cm/hr'},
    source: {reference:'Scott, B.L., Ochsner, T.E., Illston, B.G., Fiebrich, C.A., Basara, J.B. and Sutherland, A.J., 2013. New soil property database improves Oklahoma Mesonet soil moisture estimates. Journal of Atmospheric and Oceanic Technology, 30(11), pp.2585-2595.'},
    clay: {name: 'Clay', thetaRes:0.098,thetaSat:0.459,alpha:0.015,n:1.25,Ksat:0.615},
    clayLoam: {name: 'Clay loam', thetaRes:0.079, thetaSat:0.442, alpha:0.0158, n:1.42, Ksat:0.341},
    loam: {name: 'Loam', thetaRes:0.061, thetaSat:0.399, alpha:0.0111, n:1.47, Ksat:0.502},
    loamySand: {name: 'Loamy sand', thetaRes:0.049, thetaSat:0.390, alpha:0.0348, n:1.75, Ksat:4.383},
    sand: {name: 'Sand', thetaRes:0.053, thetaSat:0.375, alpha:0.0352, n:3.18, Ksat:26.779},
    sandyClay: {name: 'Sandy clay', thetaRes:0.117, thetaSat:0.385, alpha:0.0334, n:1.21, Ksat:0.473},
    sandyClayLoam: {name: 'Sandy clay loam', thetaRes:0.063, thetaSat:0.384, alpha:0.0211, n:1.33, Ksat:0.549},
    sandyLoam: {name: 'Sandy loam', thetaRes:0.039, thetaSat:0.387, alpha:0.0267, n:1.45, Ksat:1.595},
    silt: {name: 'Silt', thetaRes:0.05, thetaSat:0.489, alpha:0.0066, n:1.68, Ksat:1.823},
    siltyClay: {name: 'Silty clay', thetaRes:0.111, thetaSat:0.481, alpha:0.0162, n:1.32, Ksat:0.401},
    siltyClayLoam: {name: 'Silty clay loam', thetaRes:0.090, thetaSat:0.482, alpha:0.0084, n:1.52, Ksat:0.463},
    siltLoam: {name: 'Silt loam',thetaRes:0.065, thetaSat:0.439, alpha:0.0051, n:1.66, Ksat:0.760}
}