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
	
	.when("/login/:compName",{
		controller: "LoginController",
		templateUrl: "templates/login.html"	,
		css: "css/login.css"
	})
	.when("/home",{
		controller: "EmptyController",
		template: "",
		css: "css/menuStyle.css"		
	})
	.when("/menus/:menu_name/:menu_id/:submenu_name/:submenu_id",{
		controller: "EmptyController",
		template: "",
		css: ["css/menuStyle.css","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"]
	})
	.when("/menus/:menu/",{
		controller: "EmptyController",
		template: "",
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
  })
/*
* Removes / from the string so in doesnt ruin the route provider
*/
    .filter('fix', function () {
    return function(value) {
        if(!angular.isString(value)) {
            return value;
        }  
        var nueva=value.trim();
        return nueva.replace('/','-');
    };
});

//Rutas de la aplicacion

