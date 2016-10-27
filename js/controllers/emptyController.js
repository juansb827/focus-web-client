app.controller("EmptyController",function($scope,$rootScope,$resource,$routeParams){
	console.log("onEmptyController");
	$rootScope.content='forms/new-form.html';
	
	$scope.$on('$routeChangeSuccess', function() {
		
		console.log("On menu "+$routeParams.menu_id+" "+$routeParams.submenu_id);
		
	 });

	$rootScope.tabla={};
	
	$rootScope.doQuery=function () {		
		console.log("onDoQuery");
		/*
		$resource("http://localhost:3000/queries/3").query(function (data) {
			$rootScope.tabla.head=Object.keys(data[0]);
			$rootScope.tabla.content=data;



			console.log("keys",data );
			$rootScope.content='forms/table.html';
		});
		*/

		$resource("http://localhost:3000/queries/menu_id/"+$routeParams.menu_id+"/submenu_id/"+$routeParams.submenu_id)
		.query(function(data){
			console.log("query",data )
			$rootScope.tabla.head=Object.keys(data[0]);
			$rootScope.tabla.content=data;
			$rootScope.content='forms/table.html';



		});

	




	}  
})