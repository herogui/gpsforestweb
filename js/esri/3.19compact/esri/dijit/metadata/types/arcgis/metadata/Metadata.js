// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/metadata/templates/Metadata.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section" data-dojo-props\x3d"showHeader:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n\r\n      \x3c!-- Esri --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.metadata.section.profile}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/esri/Esri"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n        \r\n      \x3c!-- details --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/Details"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.metadata.section.details}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- metadata language --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.codelist.LanguageCode}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/MetadataLanguage"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- metadata contact --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/MetadataContact"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.contact.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- metadata maintenance --\x3e      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.maintenance.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'mdMaint\',minOccurs:0,label:\'${i18nArcGIS.metadata.mdMaint}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/maintenance/MaintenanceElements"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n\r\n      \x3c!-- metadata constraints --\x3e      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/MetadataConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.constraints.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- hidden --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,notApplicable:true,label:\'?Hidden\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/Hidden"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e  \r\n              \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/metadata/Metadata","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Metadata.html ../esri/Esri ./Details ./MetadataLanguage ./MetadataContact ../maintenance/MaintenanceElements ./MetadataConstraints ./Hidden".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.metadata.Metadata",a,d);return a});