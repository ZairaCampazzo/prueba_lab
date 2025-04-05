var wms_layers = [];

var format_barrios_chubut_0 = new ol.format.GeoJSON();
var features_barrios_chubut_0 = format_barrios_chubut_0.readFeatures(json_barrios_chubut_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_chubut_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_chubut_0.addFeatures(features_barrios_chubut_0);
var lyr_barrios_chubut_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_chubut_0, 
                style: style_barrios_chubut_0,
                popuplayertitle: 'barrios_chubut',
                interactive: true,
                title: '<img src="styles/legend/barrios_chubut_0.png" /> barrios_chubut'
            });
var format_LineasDeTransporteEL22_1 = new ol.format.GeoJSON();
var features_LineasDeTransporteEL22_1 = format_LineasDeTransporteEL22_1.readFeatures(json_LineasDeTransporteEL22_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineasDeTransporteEL22_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineasDeTransporteEL22_1.addFeatures(features_LineasDeTransporteEL22_1);
var lyr_LineasDeTransporteEL22_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineasDeTransporteEL22_1, 
                style: style_LineasDeTransporteEL22_1,
                popuplayertitle: 'LineasDeTransporteEL22',
                interactive: true,
    title: 'LineasDeTransporteEL22<br />\
    <img src="styles/legend/LineasDeTransporteEL22_1_0.png" /> Linea 1<br />\
    <img src="styles/legend/LineasDeTransporteEL22_1_1.png" /> Linea 2<br />\
    <img src="styles/legend/LineasDeTransporteEL22_1_2.png" /> Linea 3<br />\
    <img src="styles/legend/LineasDeTransporteEL22_1_3.png" /> Linea 4<br />\
    <img src="styles/legend/LineasDeTransporteEL22_1_4.png" /> Linea 5<br />' });
var format_ParadasDeTransporteEL22_2 = new ol.format.GeoJSON();
var features_ParadasDeTransporteEL22_2 = format_ParadasDeTransporteEL22_2.readFeatures(json_ParadasDeTransporteEL22_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadasDeTransporteEL22_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadasDeTransporteEL22_2.addFeatures(features_ParadasDeTransporteEL22_2);
var lyr_ParadasDeTransporteEL22_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadasDeTransporteEL22_2, 
                style: style_ParadasDeTransporteEL22_2,
                popuplayertitle: 'ParadasDeTransporteEL22',
                interactive: true,
    title: 'ParadasDeTransporteEL22<br />\
    <img src="styles/legend/ParadasDeTransporteEL22_2_0.png" /> 1<br />\
    <img src="styles/legend/ParadasDeTransporteEL22_2_1.png" /> 2<br />\
    <img src="styles/legend/ParadasDeTransporteEL22_2_2.png" /> 3<br />\
    <img src="styles/legend/ParadasDeTransporteEL22_2_3.png" /> 4<br />\
    <img src="styles/legend/ParadasDeTransporteEL22_2_4.png" /> 5<br />' });
var lyr_Redvialnacional_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.ign.gob.ar/geoserver/ows?version%3D1.1.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ign:vial_nacional",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Red vial nacional',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Redvialnacional_3, 0]);

lyr_barrios_chubut_0.setVisible(true);lyr_LineasDeTransporteEL22_1.setVisible(true);lyr_ParadasDeTransporteEL22_2.setVisible(true);lyr_Redvialnacional_3.setVisible(true);
var layersList = [lyr_barrios_chubut_0,lyr_LineasDeTransporteEL22_1,lyr_ParadasDeTransporteEL22_2,lyr_Redvialnacional_3];
lyr_barrios_chubut_0.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'barrio': 'barrio', 'codloc': 'codloc', 'dpto': 'dpto', });
lyr_LineasDeTransporteEL22_1.set('fieldAliases', {'Linea': 'Linea', 'Ciudad': 'Ciudad', 'id': 'id', });
lyr_ParadasDeTransporteEL22_2.set('fieldAliases', {'id': 'id', 'Linea': 'Linea', 'Ciudad': 'Ciudad', });
lyr_barrios_chubut_0.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'barrio': 'TextEdit', 'codloc': 'TextEdit', 'dpto': 'TextEdit', });
lyr_LineasDeTransporteEL22_1.set('fieldImages', {'Linea': 'TextEdit', 'Ciudad': 'TextEdit', 'id': 'TextEdit', });
lyr_ParadasDeTransporteEL22_2.set('fieldImages', {'id': 'TextEdit', 'Linea': 'TextEdit', 'Ciudad': 'TextEdit', });
lyr_barrios_chubut_0.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'barrio': 'no label', 'codloc': 'no label', 'dpto': 'no label', });
lyr_LineasDeTransporteEL22_1.set('fieldLabels', {'Linea': 'no label', 'Ciudad': 'no label', 'id': 'no label', });
lyr_ParadasDeTransporteEL22_2.set('fieldLabels', {'id': 'no label', 'Linea': 'no label', 'Ciudad': 'no label', });
lyr_ParadasDeTransporteEL22_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});