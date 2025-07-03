ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:22172").setExtent([2017145.339403, 4750663.525886, 3409210.284717, 5493018.978805]);
var wms_layers = [];

var format_departamentos_0 = new ol.format.GeoJSON();
var features_departamentos_0 = format_departamentos_0.readFeatures(json_departamentos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22172'});
var jsonSource_departamentos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamentos_0.addFeatures(features_departamentos_0);
var lyr_departamentos_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamentos_0, 
                style: style_departamentos_0,
                popuplayertitle: 'departamentos',
                interactive: true,
                title: '<img src="styles/legend/departamentos_0.png" /> departamentos'
            });
var format_localidades_1 = new ol.format.GeoJSON();
var features_localidades_1 = format_localidades_1.readFeatures(json_localidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22172'});
var jsonSource_localidades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidades_1.addFeatures(features_localidades_1);
var lyr_localidades_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localidades_1, 
                style: style_localidades_1,
                popuplayertitle: 'localidades',
                interactive: true,
                title: '<img src="styles/legend/localidades_1.png" /> localidades'
            });
var format_ignvial_provincial_2 = new ol.format.GeoJSON();
var features_ignvial_provincial_2 = format_ignvial_provincial_2.readFeatures(json_ignvial_provincial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22172'});
var jsonSource_ignvial_provincial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ignvial_provincial_2.addFeatures(features_ignvial_provincial_2);
var lyr_ignvial_provincial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ignvial_provincial_2, 
                style: style_ignvial_provincial_2,
                popuplayertitle: 'ign:vial_provincial',
                interactive: true,
                title: '<img src="styles/legend/ignvial_provincial_2.png" /> ign:vial_provincial'
            });
var format_ignvial_nacional_3 = new ol.format.GeoJSON();
var features_ignvial_nacional_3 = format_ignvial_nacional_3.readFeatures(json_ignvial_nacional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22172'});
var jsonSource_ignvial_nacional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ignvial_nacional_3.addFeatures(features_ignvial_nacional_3);
var lyr_ignvial_nacional_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ignvial_nacional_3, 
                style: style_ignvial_nacional_3,
                popuplayertitle: 'ign:vial_nacional',
                interactive: true,
                title: '<img src="styles/legend/ignvial_nacional_3.png" /> ign:vial_nacional'
            });

lyr_departamentos_0.setVisible(true);lyr_localidades_1.setVisible(true);lyr_ignvial_provincial_2.setVisible(true);lyr_ignvial_nacional_3.setVisible(true);
var layersList = [lyr_departamentos_0,lyr_localidades_1,lyr_ignvial_provincial_2,lyr_ignvial_nacional_3];
lyr_departamentos_0.set('fieldAliases', {'Varones': 'Varones', 'Mujeres': 'Mujeres', 'Nombre': 'Nombre', 'total': 'total', });
lyr_localidades_1.set('fieldAliases', {'gid': 'gid', 'cod_pcia': 'cod_pcia', 'nom_pcia': 'nom_pcia', 'cod_depto': 'cod_depto', 'nom_depto': 'nom_depto', 'cod_ase': 'cod_ase', 'fna': 'fna', 'tipo_asent': 'tipo_asent', 'cod_aglo': 'cod_aglo', 'nom_aglo': 'nom_aglo', 'cod_agl': 'cod_agl', 'nom_agl': 'nom_agl', 'lat_gd': 'lat_gd', 'long_gd': 'long_gd', 'lat_gs': 'lat_gs', 'long_gs': 'long_gs', 'fdc': 'fdc', });
lyr_ignvial_provincial_2.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ignvial_nacional_3.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_departamentos_0.set('fieldImages', {'Varones': 'TextEdit', 'Mujeres': 'TextEdit', 'Nombre': 'TextEdit', 'total': 'TextEdit', });
lyr_localidades_1.set('fieldImages', {'gid': '', 'cod_pcia': '', 'nom_pcia': '', 'cod_depto': '', 'nom_depto': '', 'cod_ase': '', 'fna': '', 'tipo_asent': '', 'cod_aglo': '', 'nom_aglo': '', 'cod_agl': '', 'nom_agl': '', 'lat_gd': '', 'long_gd': '', 'lat_gs': '', 'long_gs': '', 'fdc': '', });
lyr_ignvial_provincial_2.set('fieldImages', {'gid': 'Range', 'rtn': 'TextEdit', 'typ': 'Range', 'rst': 'Range', 'hct': 'Range', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_ignvial_nacional_3.set('fieldImages', {'gid': 'Range', 'rtn': 'TextEdit', 'typ': 'Range', 'rst': 'Range', 'hct': 'Range', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_departamentos_0.set('fieldLabels', {'Varones': 'no label', 'Mujeres': 'no label', 'Nombre': 'no label', 'total': 'no label', });
lyr_localidades_1.set('fieldLabels', {'gid': 'no label', 'cod_pcia': 'no label', 'nom_pcia': 'no label', 'cod_depto': 'no label', 'nom_depto': 'no label', 'cod_ase': 'no label', 'fna': 'no label', 'tipo_asent': 'no label', 'cod_aglo': 'no label', 'nom_aglo': 'no label', 'cod_agl': 'no label', 'nom_agl': 'no label', 'lat_gd': 'no label', 'long_gd': 'no label', 'lat_gs': 'no label', 'long_gs': 'no label', 'fdc': 'no label', });
lyr_ignvial_provincial_2.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_ignvial_nacional_3.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_ignvial_nacional_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});