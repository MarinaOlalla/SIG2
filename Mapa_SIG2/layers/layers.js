var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ProvinciasdeAndalucia_1 = new ol.format.GeoJSON();
var features_ProvinciasdeAndalucia_1 = format_ProvinciasdeAndalucia_1.readFeatures(json_ProvinciasdeAndalucia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasdeAndalucia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasdeAndalucia_1.addFeatures(features_ProvinciasdeAndalucia_1);
var lyr_ProvinciasdeAndalucia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinciasdeAndalucia_1,
maxResolution:722.7465436187764,
 minResolution:14.00223307613098,

                style: style_ProvinciasdeAndalucia_1,
                interactive: true,
                title: '<img src="styles/legend/ProvinciasdeAndalucia_1.png" /> Provincias de Andalucia'
            });
var format_MunicipiosdeMlaga_2 = new ol.format.GeoJSON();
var features_MunicipiosdeMlaga_2 = format_MunicipiosdeMlaga_2.readFeatures(json_MunicipiosdeMlaga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosdeMlaga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosdeMlaga_2.addFeatures(features_MunicipiosdeMlaga_2);
var lyr_MunicipiosdeMlaga_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosdeMlaga_2,
maxResolution:84.0133984567859,
 minResolution:12.602009768517881,

                style: style_MunicipiosdeMlaga_2,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosdeMlaga_2.png" /> Municipios de Málaga'
            });
var format_limites_monte_3 = new ol.format.GeoJSON();
var features_limites_monte_3 = format_limites_monte_3.readFeatures(json_limites_monte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limites_monte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_monte_3.addFeatures(features_limites_monte_3);
var lyr_limites_monte_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limites_monte_3,
maxResolution:28004.466152261964,
 
                style: style_limites_monte_3,
                interactive: true,
                title: '<img src="styles/legend/limites_monte_3.png" /> limites_monte'
            });
var lyr_Exposiciones_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Exposiciones",
                            
maxResolution:14.00223307613098,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Exposiciones_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.717599, 4397502.867494, -549526.710916, 4404917.745290]
                            })
                        });
var lyr_DistanciaaRosyCanales_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia a Ríos y Canales",
                            
maxResolution:14.00223307613098,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DistanciaaRosyCanales_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.717599, 4397502.867494, -549526.710916, 4404917.745290]
                            })
                        });
var lyr_DensidaddePinsapo_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad de Pinsapo",
                            
maxResolution:14.00223307613098,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensidaddePinsapo_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557284.960303, 4397503.382344, -549526.117998, 4404914.701516]
                            })
                        });
var lyr_IndicedeShannon_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Indice de Shannon",
                            
maxResolution:14.00223307613098,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IndicedeShannon_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557323.942613, 4397505.474458, -543719.554095, 4407478.238188]
                            })
                        });
var lyr_Rstervirtual_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ráster virtual",
                            
maxResolution:14.00223307613098,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rstervirtual_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557272.099219, 4397519.246799, -549536.975733, 4404895.377371]
                            })
                        });
var format_Segmentacin_9 = new ol.format.GeoJSON();
var features_Segmentacin_9 = format_Segmentacin_9.readFeatures(json_Segmentacin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentacin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacin_9.addFeatures(features_Segmentacin_9);
var lyr_Segmentacin_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacin_9,
maxResolution:14.00223307613098,
 
                style: style_Segmentacin_9,
                interactive: true,
                title: '<img src="styles/legend/Segmentacin_9.png" /> Segmentación'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ProvinciasdeAndalucia_1.setVisible(true);lyr_MunicipiosdeMlaga_2.setVisible(true);lyr_limites_monte_3.setVisible(true);lyr_Exposiciones_4.setVisible(true);lyr_DistanciaaRosyCanales_5.setVisible(true);lyr_DensidaddePinsapo_6.setVisible(true);lyr_IndicedeShannon_7.setVisible(true);lyr_Rstervirtual_8.setVisible(true);lyr_Segmentacin_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ProvinciasdeAndalucia_1,lyr_MunicipiosdeMlaga_2,lyr_limites_monte_3,lyr_Exposiciones_4,lyr_DistanciaaRosyCanales_5,lyr_DensidaddePinsapo_6,lyr_IndicedeShannon_7,lyr_Rstervirtual_8,lyr_Segmentacin_9];
lyr_ProvinciasdeAndalucia_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'Nombre provincia', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_MunicipiosdeMlaga_2.set('fieldAliases', {'id': 'id', 'codigo_ine': 'codigo_ine', 'natcode': 'natcode', 'nameunit': 'Nombre del Municipio', 'prov': 'prov', 'sp_km2': 'sp_km2', });
lyr_limites_monte_3.set('fieldAliases', {'CODIGO_JA': 'CODIGO_JA', 'NOMBRE': 'NOMBRE', 'ACCESO_INF': 'ACCESO_INF', 'PROVINCIAS': 'PROVINCIAS', 'TIPO_TITUL': 'TIPO_TITUL', 'SUP_HA': 'SUP_HA', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Segmentacin_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ProvinciasdeAndalucia_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SUM__P_F45': 'TextEdit', 'TSUM__P_F4': 'TextEdit', 'TSUM__P__1': 'TextEdit', 'SUM_SUM_C2': 'TextEdit', 'SUM_C2': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'C3': 'TextEdit', 'C4': 'TextEdit', 'C5': 'TextEdit', 'C6': 'TextEdit', 'C7': 'TextEdit', 'C8': 'TextEdit', 'C9': 'TextEdit', 'C10': 'TextEdit', });
lyr_MunicipiosdeMlaga_2.set('fieldImages', {'id': 'TextEdit', 'codigo_ine': 'TextEdit', 'natcode': 'TextEdit', 'nameunit': 'TextEdit', 'prov': 'TextEdit', 'sp_km2': 'TextEdit', });
lyr_limites_monte_3.set('fieldImages', {'CODIGO_JA': 'TextEdit', 'NOMBRE': 'TextEdit', 'ACCESO_INF': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'TIPO_TITUL': 'TextEdit', 'SUP_HA': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Segmentacin_9.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_ProvinciasdeAndalucia_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIAS': 'header label', 'PROVINCI_1': 'no label', 'PROVINCIA': 'no label', 'SUM__P_F45': 'no label', 'TSUM__P_F4': 'no label', 'TSUM__P__1': 'no label', 'SUM_SUM_C2': 'no label', 'SUM_C2': 'no label', 'C1': 'no label', 'C2': 'no label', 'C3': 'no label', 'C4': 'no label', 'C5': 'no label', 'C6': 'no label', 'C7': 'no label', 'C8': 'no label', 'C9': 'no label', 'C10': 'no label', });
lyr_MunicipiosdeMlaga_2.set('fieldLabels', {'id': 'no label', 'codigo_ine': 'no label', 'natcode': 'no label', 'nameunit': 'header label', 'prov': 'no label', 'sp_km2': 'no label', });
lyr_limites_monte_3.set('fieldLabels', {'CODIGO_JA': 'no label', 'NOMBRE': 'header label', 'ACCESO_INF': 'no label', 'PROVINCIAS': 'no label', 'TIPO_TITUL': 'no label', 'SUP_HA': 'no label', });
lyr_Segmentacin_9.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Segmentacin_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});