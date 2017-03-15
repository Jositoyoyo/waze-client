angular.module("app")
.controller('loginController', ['$scope', '$location', '$resource', '$window',
function ($scope, $location, $resource, $window) {
console.log($window.sessionStorage);
var is_login = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/session/is_login");
is_login.get()
   .$promise.then(function (data) {
      if(data){
        //$scope.posts = data;
        console.log(data);
      }
    },
     function (error) {
        console.log(error);
    });

$scope.login = function(){
  var do_login = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/user/do_login");

  do_login.save({
            _username: "jositoyoyo",
            _password: "1234"})
     .$promise.then(function (data) {
        if(data){
          $window.sessionStorage.setItem("apikey", data.apikey);
          $window.sessionStorage.setItem("username", angular.toJson(data.username));
          $window.sessionStorage.setItem("login", true);

        }
      },
       function (error) {
          console.log(error);
      });
};
$scope.logout = function(){
  console.log($window.sessionStorage);
  var do_logout = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/user/do_logout/"+$window.sessionStorage.apikey);
      $window.sessionStorage.setItem("apikey", null);
      $window.sessionStorage.setItem("login", false);
      do_logout.save()
         .$promise.then(function (data) {
            if(data){
              console.log(data);
            }
          },
           function (error) {
              console.log(error);
          });
};

}]);
