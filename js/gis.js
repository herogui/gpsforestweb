
//经纬度转墨卡托
function lonlat2mercator(lon, lat) {
    var X = lon * 20037508.34 / 180;
    var Y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
    Y = Y * 20037508.34 / 180;
    var mercator = new esri.geometry.Point(X, Y, map.spatialReference);
    return mercator;
}

//墨卡托转经纬度
function mercator2lonlat(x, y) {
    var X = x / 20037508.34 * 180;
    var Y = y / 20037508.34 * 180;
    Y = 180 / Math.PI * (2 * Math.atan(Math.exp(Y * Math.PI / 180)) - Math.PI / 2);
    var lonlat = new esri.geometry.Point(X, Y, map.spatialReference);
    lonlat.X = X;
    lonlat.Y = Y;
    return lonlat;
}

function pnt(x, y) {
    this.x = x;
    this.y = y;
}

function obj2json(o) {
    if (o == undefined) {
        return "";
    }
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o)
                r.push("\"" + i + "\":" + obj2json(o[i]));
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}"
        } else {
            for (var i = 0; i < o.length; i++)
                r.push(obj2json(o[i]))
            r = "[" + r.join() + "]";
        }
        return r;
    }

    var json = o.toString().replace(/\"\:/g, '":""');

    return json;
}