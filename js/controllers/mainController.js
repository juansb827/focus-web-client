app.controller("MainController",function($scope,$location,storageService,$routeParams){
	console.log("onMainController");	
	var logged=storageService.isLogged();
	console.log("Logged",logged);	
	$scope.showDrawer=false;
	$scope.startApp=function(compName){
		$location.path("/home");				
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
	$scope.tabla={};



	//
	$scope.reporte=function () {
		console.log("HUHEU");
		$resource("http://localhost:3000/queries/3").query(function (data) {
			$scope.tabla.head=Object.keys(data[0]);
			$scope.tabla.content=data;



			console.log("keys",data );
		});

			$location.path("/query/show/table"); // path not hash



	}  

    
});