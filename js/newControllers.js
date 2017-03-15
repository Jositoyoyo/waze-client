angular.module("app")
.controller('newController', ['$scope', '$location', '$resource', '$window',
function ($scope, $location, $resource, $window) {

  var apiKey = $window.sessionStorage.apikey;
  console.log(apiKey);

  var waze = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/new");

  $scope.new = function(){
  waze.save({
            apiKey: apiKey,
            categoria: 1
          })
     .$promise.then(function (data) {
        if(data.results){

          console.log(data);
        } else {
        }
      },
       function (error) {
          console.log(error);
      });
    }


}]);
