angular.module("app")
.controller('homeController', ['$scope', '$location', '$resource',
function ($scope, $location, $resource) {

var wazes = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/buscar/0");
wazes.get()
   .$promise.then(function (data) {
      if(data){
        $scope.posts = data;
        console.log($scope.posts);
      }
    },
     function (error) {
        console.log(error);
    });


}])

.controller('itemsController', ['$scope', '$location', '$resource', 'WazeService',
function ($scope, $location, $resource, WazeService) {

function items(categoria=0, distancia=1){
  var wazes = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/items");
  wazes.get({lat: "40.4511517",
            lng: "-3.6828327000000627",
            categoria: categoria,
            distancia: distancia,
          })
     .$promise.then(function (data) {
        if(data.results){
          $scope.items = data.items;
          console.log($scope.items);
        } else {
          $scope.items = null;
        }
      },
       function (error) {
          console.log(error);
      });
}
  $scope.items_buscar = function(){
    items($scope.categoria, $scope.distancia);

  };
  items(categoria=0, distancia=1);

}])
.controller('itemController', ['$scope', '$location', 'WazeMap', '$routeParams',
function ($scope, $location, WazeMap, $routeParams) {
  //console.log($routeParams.id);
  //WazeMap.resource($routeParams.id);

 var mapDiv = document.getElementById('map');
  console.log(mapDiv);
  var Center = new google.maps.LatLng(40.4167754, -3.7037901999999576);
  var map = new google.maps.Map(mapDiv, {
    center: Center,
    zoom: 12
  });
  console.log(map);


}]);
