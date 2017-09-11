window.onload = function () {
  var map = new YMaps.Map(document.getElementById("YMapsID"));

  map.setCenter(new YMaps.GeoPoint(30.323055, 59.938635), 17);

  var s = new YMaps.Style();

  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "img/marker.png";
  s.iconStyle.size = new YMaps.Point(231, 190);
  s.iconStyle.offset = new YMaps.Point(-115, -190);
  s.hasBalloon = false;

  var placemark = new YMaps.Placemark(map.getCenter(), {
    style: s,
    hideIcon: false
  });

  map.addOverlay(placemark);
};
