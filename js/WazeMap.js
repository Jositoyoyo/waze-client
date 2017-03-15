angular.module("app")
.factory("WazeMap", function ($resource) {

var WazeMap = {};
var map;
var resource = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/buscar");

  WazeMap.initMap = function(result){

    var mapDiv = document.getElementById('map');
    var Center = new google.maps.LatLng(lat, Lng);
    map = new google.maps.Map(mapDiv, {
      center: Center,
      zoom: 12
    });


  };

  WazeMap.resource = function(id){
    var waze = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/item/"+id);
    waze.get()
       .$promise.then(function(result) {
          if(result){
            WazeMap.initMap(result);
          } else {
            WazeMap.noResult();
          }
        },
         function (error) {
            console.log(error);
        });
  };

  WazeMap.noResult = function(lat, Lng){
    var Center = new google.maps.LatLng(40.4167754, -3.7037901999999576);
    map = new google.maps.Map(document.getElementById('map'), {
      center: Center,
      zoom: 12
    });

  };



  return WazeMap;
});
