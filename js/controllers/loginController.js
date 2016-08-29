app.controller("LoginController", function($scope,$resource,$routeParams,$location,storageService){		
	
	$scope.empresa = $resource("http://localhost:3000/focus/companies/:compName/")
	.get({compName: $routeParams.compName }, function(){
		console.log($scope.empresa.empresa);		
	});


	$scope.loginTest= function(){		
		storageService.saveEmpresa($scope.empresa);
		storageService.setLogged(true);	
		
		$resource("http://localhost:3000/focus/companies/ICPAR/users/3/menu").get(function(data){
			$scope.menu=data.toJSON();
			storageService.saveMenu($scope.menu);
			
			$location.path(""+$routeParams.compName+"/app");		
		});


	
	

		
	}


	
});