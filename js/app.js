var app=angular.module("FocusWebClient",[
	"ngRoute",
	"ngResource",
	"LocalStorageModule",
	"angularCSS",
	"ngAnimate",
	"ngMaterial",
    "ngMessages",
    "md.data.table"

	]);
app.config(function($routeProvider){
	$routeProvider
	.when("/:compName",{
		controller: "LoginController",
		templateUrl: "templates/login.html"	,
		css: "css/login.css"
	})
	.when("/:compName/app",{
		controller: "EmptyController",
		templateUrl: "templates/main.html",
		css: "css/menuStyle.css"		
	})
	.when("/menus/:menu/:formName",{
		controller: "MenuController",
		templateUrl: "templates/include.html",
		css: "css/menuStyle.css"
	})
	.when("/menus/:menu/",{
		controller: "MenuController",
		templateUrl: "templates/include.html",
		css: ["css/menuStyle.css"
		
		]
	}).when("/query/show/table",{
        controller: "MenuController",
        templateUrl :"templates/include.html",
        css: "css/menuStyle.css"
    })


})
//take all whitespace out of string
.filter('nospace', function () {
	return function (value) {
		return (!value) ? '' : value.replace(/ /g, '');
	};
})
     //replace uppercase to regular case
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        
        return doc.label || doc.name;
      };
  });

//Rutas de la aplicacion

