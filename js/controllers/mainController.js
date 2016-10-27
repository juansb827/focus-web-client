app.controller("MainController",function($scope,$location,storageService,$routeParams){
	console.log("onMainController");	
	var logged=storageService.isLogged();
	console.log("Logged",logged);	
	$scope.showDrawer=false;

	//Opens the menu
	$scope.startApp=function(){
		var current=$location.path();
		//only redirects when trying to go to the login page
		if(current.indexOf("login") !== -1){
			console.log("isLogin",current);
			$location.path("/home");
			return;		
		}else{
			console.log("isNotLogin",current);
		}		
		
		$scope.empresa=storageService.getEmpresa();
		$scope.sideMenu='templates/side.html';		
		$scope.showDrawer=true;
	}

	$scope.$on('$routeChangeSuccess', function() {
		if(logged){
			$scope.startApp();
		}	
	 });
})
.controller("StartController", function($scope,$resource,$location,$routeParams,$rootScope,$timeout,storageService){	
	/*
	console.log("onStartController");	
	var logged=storageService.isLogged();
	console.log("isLogged",logged);


	$scope.$on('$routeChangeSuccess', function() {
		if(logged){
		$scope.startApp();
		}	else{
			console.log("onRouteChange",$routeParams);
		$location.path("app/"+$routeParams.compName+"/login");		
		}		
	 }); */

	
/*
	//Hace que sirva Material design lite
	$rootScope.$on('$viewContentLoaded', function() {
		$timeout(function() {
	//		componentHandler.upgradeAllRegistered();
			console.log("succces");
			
		});
	});
*/
	

    
});