ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([387346.888512, 710605.436744, 425820.510760, 732105.402118]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_RsultatfinalAptitudepourdimplantationdestationdpuration_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Résultat final : Aptitude pour d\'implantation de station d\'épuration<br />\
    <img src="styles/legend/RsultatfinalAptitudepourdimplantationdestationdpuration_1_0.png" /> Zones non propices<br />\
    <img src="styles/legend/RsultatfinalAptitudepourdimplantationdestationdpuration_1_1.png" /> Zones peu propices<br />\
    <img src="styles/legend/RsultatfinalAptitudepourdimplantationdestationdpuration_1_2.png" /> Zones propices<br />\
    <img src="styles/legend/RsultatfinalAptitudepourdimplantationdestationdpuration_1_3.png" /> Zones très propices<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RsultatfinalAptitudepourdimplantationdestationdpuration_1.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731658.893000]
        })
    });
var lyr_Altitude_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Altitude<br />\
    <img src="styles/legend/Altitude_2_0.png" /> 0<br />\
    <img src="styles/legend/Altitude_2_1.png" /> 22<br />\
    <img src="styles/legend/Altitude_2_2.png" /> 44<br />\
    <img src="styles/legend/Altitude_2_3.png" /> 65<br />\
    <img src="styles/legend/Altitude_2_4.png" /> 87<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Altitude_2.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731658.893000]
        })
    });
var lyr_Proximitdesrseauxdcoulementdeaum_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximité des réseaux d\'écoulement d\'eau (m)<br />\
    <img src="styles/legend/Proximitdesrseauxdcoulementdeaum_3_0.png" /> 30,708980<br />\
    <img src="styles/legend/Proximitdesrseauxdcoulementdeaum_3_1.png" /> 624,998252<br />\
    <img src="styles/legend/Proximitdesrseauxdcoulementdeaum_3_2.png" /> 1219,287524<br />\
    <img src="styles/legend/Proximitdesrseauxdcoulementdeaum_3_3.png" /> 1813,576796<br />\
    <img src="styles/legend/Proximitdesrseauxdcoulementdeaum_3_4.png" /> 2407,866067<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitdesrseauxdcoulementdeaum_3.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731640.381100]
        })
    });
var format_Rseaudcoulementdeau_4 = new ol.format.GeoJSON();
var features_Rseaudcoulementdeau_4 = format_Rseaudcoulementdeau_4.readFeatures(json_Rseaudcoulementdeau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rseaudcoulementdeau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseaudcoulementdeau_4.addFeatures(features_Rseaudcoulementdeau_4);
var lyr_Rseaudcoulementdeau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseaudcoulementdeau_4, 
                style: style_Rseaudcoulementdeau_4,
                popuplayertitle: 'Réseau d\'écoulement d\'eau',
                interactive: false,
    title: 'Réseau d\'écoulement d\'eau<br />\
    <img src="styles/legend/Rseaudcoulementdeau_4_0.png" /> Ordre 1<br />\
    <img src="styles/legend/Rseaudcoulementdeau_4_1.png" /> Ordre 2<br />\
    <img src="styles/legend/Rseaudcoulementdeau_4_2.png" /> Ordre 3<br />' });
var lyr_Proximitdesroutesm_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximité des routes (m)<br />\
    <img src="styles/legend/Proximitdesroutesm_5_0.png" /> 9,999339<br />\
    <img src="styles/legend/Proximitdesroutesm_5_1.png" /> 481,224655<br />\
    <img src="styles/legend/Proximitdesroutesm_5_2.png" /> 952,449970<br />\
    <img src="styles/legend/Proximitdesroutesm_5_3.png" /> 1423,675285<br />\
    <img src="styles/legend/Proximitdesroutesm_5_4.png" /> 1894,900600<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitdesroutesm_5.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731658.893000]
        })
    });
var format_Routesvoies_6 = new ol.format.GeoJSON();
var features_Routesvoies_6 = format_Routesvoies_6.readFeatures(json_Routesvoies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Routesvoies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesvoies_6.addFeatures(features_Routesvoies_6);
var lyr_Routesvoies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesvoies_6, 
                style: style_Routesvoies_6,
                popuplayertitle: 'Routes/voies',
                interactive: false,
                title: '<img src="styles/legend/Routesvoies_6.png" /> Routes/voies'
            });
var lyr_Proximitdesbtimentsm_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximité des bâtiments (m)<br />\
    <img src="styles/legend/Proximitdesbtimentsm_7_0.png" /> 9,999339<br />\
    <img src="styles/legend/Proximitdesbtimentsm_7_1.png" /> 760,238743<br />\
    <img src="styles/legend/Proximitdesbtimentsm_7_2.png" /> 1510,478147<br />\
    <img src="styles/legend/Proximitdesbtimentsm_7_3.png" /> 2260,717551<br />\
    <img src="styles/legend/Proximitdesbtimentsm_7_4.png" /> 3010,956955<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitdesbtimentsm_7.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731658.893000]
        })
    });
var format_Zonestamponsde250mautourdesbtiments_8 = new ol.format.GeoJSON();
var features_Zonestamponsde250mautourdesbtiments_8 = format_Zonestamponsde250mautourdesbtiments_8.readFeatures(json_Zonestamponsde250mautourdesbtiments_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zonestamponsde250mautourdesbtiments_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonestamponsde250mautourdesbtiments_8.addFeatures(features_Zonestamponsde250mautourdesbtiments_8);
var lyr_Zonestamponsde250mautourdesbtiments_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonestamponsde250mautourdesbtiments_8, 
                style: style_Zonestamponsde250mautourdesbtiments_8,
                popuplayertitle: 'Zones tampons de 250 m autour des bâtiments',
                interactive: false,
                title: '<img src="styles/legend/Zonestamponsde250mautourdesbtiments_8.png" /> Zones tampons de 250 m autour des bâtiments'
            });
var format_Btiments_9 = new ol.format.GeoJSON();
var features_Btiments_9 = format_Btiments_9.readFeatures(json_Btiments_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Btiments_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiments_9.addFeatures(features_Btiments_9);
var lyr_Btiments_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiments_9, 
                style: style_Btiments_9,
                popuplayertitle: 'Bâtiments',
                interactive: false,
                title: '<img src="styles/legend/Btiments_9.png" /> Bâtiments'
            });
var lyr_ClassesdoccupationdusoldeTori_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Classes d\'occupation du sol de Tori<br />\
    <img src="styles/legend/ClassesdoccupationdusoldeTori_10_0.png" /> Eau<br />\
    <img src="styles/legend/ClassesdoccupationdusoldeTori_10_1.png" /> Végétation<br />\
    <img src="styles/legend/ClassesdoccupationdusoldeTori_10_2.png" /> Plantations et cultures<br />\
    <img src="styles/legend/ClassesdoccupationdusoldeTori_10_3.png" /> Sol nu<br />\
    <img src="styles/legend/ClassesdoccupationdusoldeTori_10_4.png" /> Zones bâties<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ClassesdoccupationdusoldeTori_10.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390885.000000, 711135.000000, 417615.000000, 731655.000000]
        })
    });
var lyr_Pentedurelief_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pente du relief (%)<br />\
    <img src="styles/legend/Pentedurelief_11_0.png" /> 0,0000<br />\
    <img src="styles/legend/Pentedurelief_11_1.png" /> 4,3565<br />\
    <img src="styles/legend/Pentedurelief_11_2.png" /> 8,7131<br />\
    <img src="styles/legend/Pentedurelief_11_3.png" /> 13,0696<br />\
    <img src="styles/legend/Pentedurelief_11_4.png" /> 17,4262<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pentedurelief_11.png",
            attributions: ' ',
            projection: 'EPSG:32631',
            alwaysInRange: true,
            imageExtent: [390857.106100, 711126.782200, 417635.337000, 731658.893000]
        })
    });
var format_Afrique_12 = new ol.format.GeoJSON();
var features_Afrique_12 = format_Afrique_12.readFeatures(json_Afrique_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Afrique_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afrique_12.addFeatures(features_Afrique_12);
var lyr_Afrique_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Afrique_12, minResolution:280.0446615226196,

                style: style_Afrique_12,
                popuplayertitle: 'Afrique',
                interactive: false,
                title: '<img src="styles/legend/Afrique_12.png" /> Afrique'
            });
var format_Plansetcoursdeau_13 = new ol.format.GeoJSON();
var features_Plansetcoursdeau_13 = format_Plansetcoursdeau_13.readFeatures(json_Plansetcoursdeau_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Plansetcoursdeau_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plansetcoursdeau_13.addFeatures(features_Plansetcoursdeau_13);
var lyr_Plansetcoursdeau_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plansetcoursdeau_13,
maxResolution:1374.8487408771953,
 
                style: style_Plansetcoursdeau_13,
                popuplayertitle: 'Plans et cours d\'eau',
                interactive: false,
                title: '<img src="styles/legend/Plansetcoursdeau_13.png" /> Plans et cours d\'eau'
            });
var format_DpartementsduBnin_14 = new ol.format.GeoJSON();
var features_DpartementsduBnin_14 = format_DpartementsduBnin_14.readFeatures(json_DpartementsduBnin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_DpartementsduBnin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DpartementsduBnin_14.addFeatures(features_DpartementsduBnin_14);
var lyr_DpartementsduBnin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DpartementsduBnin_14,
maxResolution:1425.7645009226073,
 minResolution:246.7339091238271,

                style: style_DpartementsduBnin_14,
                popuplayertitle: 'Départements du Bénin',
                interactive: false,
                title: '<img src="styles/legend/DpartementsduBnin_14.png" /> Départements du Bénin'
            });
var format_CommunesduBnin_15 = new ol.format.GeoJSON();
var features_CommunesduBnin_15 = format_CommunesduBnin_15.readFeatures(json_CommunesduBnin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_CommunesduBnin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesduBnin_15.addFeatures(features_CommunesduBnin_15);
var lyr_CommunesduBnin_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesduBnin_15,
maxResolution:246.7339091238271,
 
                style: style_CommunesduBnin_15,
                popuplayertitle: 'Communes du Bénin',
                interactive: false,
                title: '<img src="styles/legend/CommunesduBnin_15.png" /> Communes du Bénin'
            });
var format_ArrondissementsdelacommunedeTori_16 = new ol.format.GeoJSON();
var features_ArrondissementsdelacommunedeTori_16 = format_ArrondissementsdelacommunedeTori_16.readFeatures(json_ArrondissementsdelacommunedeTori_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_ArrondissementsdelacommunedeTori_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArrondissementsdelacommunedeTori_16.addFeatures(features_ArrondissementsdelacommunedeTori_16);
var lyr_ArrondissementsdelacommunedeTori_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArrondissementsdelacommunedeTori_16, 
                style: style_ArrondissementsdelacommunedeTori_16,
                popuplayertitle: 'Arrondissements de la commune de Tori',
                interactive: false,
                title: '<img src="styles/legend/ArrondissementsdelacommunedeTori_16.png" /> Arrondissements de la commune de Tori'
            });
var format_ToriBossito_17 = new ol.format.GeoJSON();
var features_ToriBossito_17 = format_ToriBossito_17.readFeatures(json_ToriBossito_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_ToriBossito_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToriBossito_17.addFeatures(features_ToriBossito_17);
var lyr_ToriBossito_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ToriBossito_17, 
                style: style_ToriBossito_17,
                popuplayertitle: 'Tori-Bossito',
                interactive: false,
                title: '<img src="styles/legend/ToriBossito_17.png" /> Tori-Bossito'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RsultatfinalAptitudepourdimplantationdestationdpuration_1.setVisible(true);lyr_Altitude_2.setVisible(true);lyr_Proximitdesrseauxdcoulementdeaum_3.setVisible(true);lyr_Rseaudcoulementdeau_4.setVisible(true);lyr_Proximitdesroutesm_5.setVisible(true);lyr_Routesvoies_6.setVisible(true);lyr_Proximitdesbtimentsm_7.setVisible(true);lyr_Zonestamponsde250mautourdesbtiments_8.setVisible(true);lyr_Btiments_9.setVisible(true);lyr_ClassesdoccupationdusoldeTori_10.setVisible(true);lyr_Pentedurelief_11.setVisible(true);lyr_Afrique_12.setVisible(true);lyr_Plansetcoursdeau_13.setVisible(true);lyr_DpartementsduBnin_14.setVisible(true);lyr_CommunesduBnin_15.setVisible(true);lyr_ArrondissementsdelacommunedeTori_16.setVisible(true);lyr_ToriBossito_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RsultatfinalAptitudepourdimplantationdestationdpuration_1,lyr_Altitude_2,lyr_Proximitdesrseauxdcoulementdeaum_3,lyr_Rseaudcoulementdeau_4,lyr_Proximitdesroutesm_5,lyr_Routesvoies_6,lyr_Proximitdesbtimentsm_7,lyr_Zonestamponsde250mautourdesbtiments_8,lyr_Btiments_9,lyr_ClassesdoccupationdusoldeTori_10,lyr_Pentedurelief_11,lyr_Afrique_12,lyr_Plansetcoursdeau_13,lyr_DpartementsduBnin_14,lyr_CommunesduBnin_15,lyr_ArrondissementsdelacommunedeTori_16,lyr_ToriBossito_17];
lyr_Rseaudcoulementdeau_4.set('fieldAliases', {'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', });
lyr_Routesvoies_6.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_fr': 'name_fr', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Zonestamponsde250mautourdesbtiments_8.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'RELIGIEUX': 'RELIGIEUX', 'SOURCE': 'SOURCE', 'DATE_MAJ': 'DATE_MAJ', });
lyr_Btiments_9.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'RELIGIEUX': 'RELIGIEUX', 'SOURCE': 'SOURCE', 'DATE_MAJ': 'DATE_MAJ', });
lyr_Afrique_12.set('fieldAliases', {'COUNTRY': 'COUNTRY', });
lyr_Plansetcoursdeau_13.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM': 'NOM', 'REGIME': 'REGIME', 'SOURCE': 'SOURCE', 'DATE_MAJ': 'DATE_MAJ', });
lyr_DpartementsduBnin_14.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', });
lyr_CommunesduBnin_15.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', 'Superficie': 'Superficie', });
lyr_ArrondissementsdelacommunedeTori_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'BN_NIV1': 'BN_NIV1', 'BN_NIV2': 'BN_NIV2', 'BN_NIV3': 'BN_NIV3', 'BN_NIV4': 'BN_NIV4', 'AREA_KM²': 'AREA_KM²', 'POP_79': 'POP_79', 'POP_92': 'POP_92', 'POP_02': 'POP_02', 'TABSymID': 'TABSymID', 'sup': 'sup', });
lyr_ToriBossito_17.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', 'Superficie': 'Superficie', });
lyr_Rseaudcoulementdeau_4.set('fieldImages', {'arcid': 'TextEdit', 'grid_code': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', });
lyr_Routesvoies_6.set('fieldImages', {'name': '', 'name_en': '', 'highway': '', 'surface': '', 'smoothness': '', 'width': '', 'lanes': '', 'oneway': '', 'bridge': '', 'layer': '', 'source': '', 'name_fr': '', 'osm_id': '', 'osm_type': '', });
lyr_Zonestamponsde250mautourdesbtiments_8.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'RELIGIEUX': 'TextEdit', 'SOURCE': 'TextEdit', 'DATE_MAJ': 'TextEdit', });
lyr_Btiments_9.set('fieldImages', {'ID': '', 'NATURE': '', 'RELIGIEUX': '', 'SOURCE': '', 'DATE_MAJ': '', });
lyr_Afrique_12.set('fieldImages', {'COUNTRY': 'TextEdit', });
lyr_Plansetcoursdeau_13.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'REGIME': 'TextEdit', 'SOURCE': 'TextEdit', 'DATE_MAJ': 'TextEdit', });
lyr_DpartementsduBnin_14.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', });
lyr_CommunesduBnin_15.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ArrondissementsdelacommunedeTori_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Range', 'BN_NIV1': 'TextEdit', 'BN_NIV2': 'TextEdit', 'BN_NIV3': 'TextEdit', 'BN_NIV4': 'TextEdit', 'AREA_KM²': 'Range', 'POP_79': 'Range', 'POP_92': 'Range', 'POP_02': 'Range', 'TABSymID': 'TextEdit', 'sup': 'TextEdit', });
lyr_ToriBossito_17.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Rseaudcoulementdeau_4.set('fieldLabels', {'arcid': 'no label', 'grid_code': 'no label', 'from_node': 'no label', 'to_node': 'no label', });
lyr_Routesvoies_6.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_fr': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Zonestamponsde250mautourdesbtiments_8.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'RELIGIEUX': 'no label', 'SOURCE': 'no label', 'DATE_MAJ': 'no label', });
lyr_Btiments_9.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'RELIGIEUX': 'no label', 'SOURCE': 'no label', 'DATE_MAJ': 'no label', });
lyr_Afrique_12.set('fieldLabels', {'COUNTRY': 'no label', });
lyr_Plansetcoursdeau_13.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'NOM': 'no label', 'REGIME': 'no label', 'SOURCE': 'no label', 'DATE_MAJ': 'no label', });
lyr_DpartementsduBnin_14.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', });
lyr_CommunesduBnin_15.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'DEPART': 'no label', 'Superficie': 'no label', });
lyr_ArrondissementsdelacommunedeTori_16.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'BN_NIV1': 'no label', 'BN_NIV2': 'no label', 'BN_NIV3': 'no label', 'BN_NIV4': 'no label', 'AREA_KM²': 'no label', 'POP_79': 'no label', 'POP_92': 'no label', 'POP_02': 'no label', 'TABSymID': 'no label', 'sup': 'no label', });
lyr_ToriBossito_17.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'DEPART': 'no label', 'Superficie': 'no label', });
lyr_ToriBossito_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});