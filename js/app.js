angular.module("app",["ngRoute", "ngResource"])
.constant('CONFIG', {
	TEMPLATE_DIR:"templates/",
	ROL_CURRENT_USER: 1,
})
.config(function($routeProvider, CONFIG){
  $routeProvider
  .when("/login", {
    title: "login",
    controller: "loginController",
    templateUrl: CONFIG.TEMPLATE_DIR+"login.html",
    authorization: false
  })
  .when("/home", {
    title: "Home",
    controller: "homeController",
    templateUrl: "templates/home.html",
    authorization: true

  })
	.when("/items", {
    title: "Items",
    controller: "itemsController",
    templateUrl: "templates/items.html"
  })
	.when("/item/:id", {
	    controller: "itemController",
	    templateUrl: "templates/item.html"
	  })

		.when("/new", {
	    title: "New item",
	    controller: "newController",
	    templateUrl: "templates/new.html",
	  })

  .otherwise({
      redirectTo: '/home'
  });

})
.run(function($rootScope, $location){
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;

/*
            UserService.get('session.php').then(function (results) {
              if (results) {
                $rootScope.isLogin = results.isLogin;
                $rootScope.token = results.token; //Token
                $rootScope.name = results.username;
                console.log($rootScope);
              } else {
                $rootScope.isLogin = false;
                $rootScope.token = null; //Token
                $rootScope.username = 'anonimo';
              }
            });
            //

            if(next.authorization == true && $rootScope.isLogin == false){
                $location.path('/login');
            }*/
          });

});
