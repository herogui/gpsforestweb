// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/renderers/TemporalRenderer",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./Renderer"],function(b,f,g,h,k){b=b(k,{declaredClass:"esri.renderer.TemporalRenderer",constructor:function(a,b,d,c){this.observationRenderer=a;this.latestObservationRenderer=b;this.trackRenderer=d;this.observationAger=c},getSymbol:function(a){var b=a.getLayer(),d=this.getObservationRenderer(a),c=d&&d.getSymbol(a),e=this.observationAger;b.timeInfo&&(b._map.timeExtent&&d===this.observationRenderer&&
e&&c)&&(c=e.getAgedSymbol(c,a));return c},getObservationRenderer:function(a){return 0===a.getLayer()._getKind(a)?this.observationRenderer:this.latestObservationRenderer||this.observationRenderer},toJson:function(){var a={type:"temporal"};a.observationRenderer=this.observationRenderer.toJson();this.latestObservationRenderer&&(a.latestObservationRenderer=this.latestObservationRenderer.toJson());this.trackRenderer&&(a.trackRenderer=this.trackRenderer.toJson());this.observationAger&&(a.observationAger=
this.observationAger.toJson());return a}});g("extend-esri")&&f.setObject("renderer.TemporalRenderer",b,h);return b});