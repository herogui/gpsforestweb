    var drawTool;//画图工具
var disTool;//测距工具
window.onload = function () {

    //初始化地图容器
    require([
        "esri/map", "esri/geometry/Extent", "esri/layers/WebTiledLayer", "esri/toolbars/draw",
       "dojo/parser",
       "dojo/domReady!"
    ], function (
        Map, Extent, WebTiledLayer,Draw, parser, domReady
      ) {
        parser.parse();
           
        //初始化地图范围
        var fullExtent = new Extent({ xmin: 12618458.717709353, ymin: 2649413.0984451086, xmax: 12642918.566760575, ymax: 2654878.3459674916, spatialReference: { wkid: 102100 } });
        initMap();

        //初始化地图
        function initMap() {
            map = new Map("map", {
                extent: fullExtent,
                logo: false,
                slider:false//是否显示放大缩小控件
            });

            //google地图
            var gMap = new WebTiledLayer("http://mt${subDomain}.google.cn/maps/vt?lyrs=s%40717&hl=zh-CN&gl=CN&x=${col}&y=${row}&z=${level}", {

                "id": "gMap",
                "subDomains": ["0", "1", "2"]
            });

            map.addLayer(gMap);

            var gMap2 = new WebTiledLayer("http://mt${subDomain}.google.cn/maps/vt/imgtp=png32&lyrs=h@262&hl=x-local&gl=cn&x=${col}&y=${row}&z=${level}&s=G", {
                "id": "gMap2",
                "subDomains": ["0", "1", "2"]
            });
            map.addLayer(gMap2);
        }

        //画图
        drawTool = new Draw(map);
        drawTool.on("draw-end", drawEndHandle);

        disTool = new Draw(map)
        disTool.on("draw-end",disEndHandle)

        //点击删除轨迹
        dojo.connect(map.graphics, "onClick", function (evt) {
            if(evt.graphic.geometry.type=='polyline')
                map.graphics.remove(evt.graphic)
            else if (evt.graphic.geometry.type == 'point')
            {
                var name = evt.graphic.attributes.Name
                alert(name)
            }
        });

        //end
    });
}

//激活画线工具
function activeDrawTool() {
    require([
        "esri/toolbars/draw",
    ], function (draw) {
        drawTool.activate(draw.POLYLINE);
    });
}

//画轨迹完成
function drawEndHandle(evt) {
    require([
        "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/graphic"
    ], function (SimpleFillSymbol,SimpleLineSymbol, Graphic) {
        drawTool.deactivate();
            
        //绘图
        var highlightSymbol = new SimpleLineSymbol(
                                            SimpleLineSymbol.STYLE_SOLID,
                                            new dojo.Color([102, 102, 255]),
                                            5
                                        );
        var graphic = new Graphic(evt.geometry, highlightSymbol);          
        map.graphics.add(graphic);
            
        //点存为Json
        polyline2Json(evt.geometry)
    });
}

//激活测距工具
function activeDisTool() {
    require([
        "esri/toolbars/draw",
    ], function (draw) {
        disTool.activate(draw.POLYLINE);
    });
}

function disEndHandle(evt) {
    var  measuregeometry = evt.geometry;
    disTool.deactivate();
       
    var graphic;
    //绘图
    require([
       "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/graphic"
    ], function (SimpleFillSymbol, SimpleLineSymbol, Graphic) {
        var highlightSymbol = new SimpleLineSymbol(
                                            SimpleLineSymbol.STYLE_SOLID,
                                            new dojo.Color([255, 34, 34]),
                                            3
                                        );
        graphic = new Graphic(evt.geometry, highlightSymbol);
        map.graphics.add(graphic);
    });

    //测距
    var arr = measuregeometry.paths[0];
    var dis = 0.0;
    for (n in arr) {
        if (n == 0) continue;
        var lonlat1 = mercator2lonlat(arr[n-1][0], arr[n-1][1])
        var lonlat2 = mercator2lonlat(arr[n][0], arr[n][1])
        dis+= DistanceOfTwoPoints(lonlat1.x,lonlat1.y,lonlat2.x,lonlat2.y)           
    }
    var CurX = measuregeometry.paths[0][measuregeometry.paths[0].length - 1][0];
    var CurY = measuregeometry.paths[0][measuregeometry.paths[0].length - 1][1];
    var CurPos = new esri.geometry.Point(CurX, CurY, map.spatialReference);
    map.infoWindow.setTitle("距离测量");
    map.infoWindow.setContent(" 测 量 长 度 ： <strong>" + parseInt(String(dis)) + "米</strong>");
    map.infoWindow.show(CurPos);
    map.infoWindow.on('hide', function () { map.graphics.remove(graphic); })
        
}

//获取轨迹的Json
function polyline2Json(polyline)
{
    var arr = polyline.paths[0];
    var json = ""
    var pntList = [];
    for (n in arr)
    {
        var lonlat = mercator2lonlat(arr[n][0], arr[n][1])
        var p = new pnt(lonlat.X, lonlat.Y)
        pntList.push(p)            
    }
    var json = obj2json(pntList)
    alert(json)
}

function addPnt()
{       
    var lon = parseFloat(document.getElementById("txtLon").value)
    var lat = parseFloat(document.getElementById("txtLat").value)
    var name = document.getElementById("txtName").value
    addPntToMap(lon, lat, name)
}

function addPntToMap(lon,lat,name) {
    var p = new esri.geometry.Point(lon,lat)
    require([
        "esri/symbols/PictureMarkerSymbol", "esri/graphic"
    ], function (PictureMarkerSymbol, Graphic) {
         
        var markerSymbol = new PictureMarkerSymbol('people.png', 45, 45);
        var attr = { "Xcoord": lon, "Ycoord": lat, "Name": name};
        var graphic = new Graphic(p, markerSymbol,attr);
        map.graphics.add(graphic);

        map.centerAt(p)
    });
}
