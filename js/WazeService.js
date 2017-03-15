angular.module("app")
.factory("WazeService",function ($resource) {
    WazeService = {};
    WazeService.resource = $resource("http://localhost/Proyectos/waze/base/web/app_dev.php/rest/waze/buscar/3");
    WazeService.results;

    WazeService.find = function(){
      WazeService.resource.get()
         .$promise.then(function (data) {
            if(data){
              WazeService.results = data;
              console.log(data);
            }
          },
           function (error) {
              console.log(error);
          });
      };

  return WazeService;


});
