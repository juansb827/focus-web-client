app.controller("LoginController", function($scope,$resource,$routeParams,$location,storageService){		
	console.log("onCreateLogincontroller");	

	$scope.$on('$routeChangeSuccess',function(){
		$scope.empresa = $resource("http://localhost:3000/focus/companies/:compName/")
		.get({compName: $routeParams.compName }, function(){
		console.log("EMPRESA:",$scope.empresa.empresa);		
		});
	});
	


	$scope.loginTest= function(){		
		storageService.saveEmpresa($scope.empresa);
		storageService.setLogged(true);	
		
		$resource("http://localhost:3000/focus/companies/ICPAR/users/3/menu").get(function(data){
			$scope.menu=data.toJSON();
			storageService.saveMenu($scope.menu);			
			console.log("savingMenu",$scope.menu);			
			$scope.startApp($routeParams.compName);
		});


	
	

		
	}


	
});