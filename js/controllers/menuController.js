app.controller("MenuController", function($scope,$routeParams,$rootScope,$timeout){
	//more like formController
	$scope.include='forms/form3.html';
	if(!$routeParams.formName){
		console.log("formName==null usando default form");	
		$scope.include='templates/table.html';
	}

	



});