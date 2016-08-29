app.controller("MainController", function($scope,$resource,$location,$routeParams,$rootScope,$timeout,storageService,menuService){
	
	
	$scope.showDrawer=false;
	console.log("firstRun");
	$scope.init=function(){
		console.log("init");
		$scope.empresa=storageService.getEmpresa();
		//$scope.menu=storageService.getMenu();
		console.log(storageService.getMenu());
		$scope.menuItems=Object.keys($scope.menu);				
		$scope.showDrawer=true;
	}

	$scope.oneAtATime = true;
	

	//Hace que sirva Material design lite
	$rootScope.$on('$viewContentLoaded', function() {
		$timeout(function() {
	//		componentHandler.upgradeAllRegistered();
			console.log("succces");
			$scope.init();
		});
	});

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

    //functions for menu-link and menu-toggle


    
    var vm=this;

    vm.autoFocusContent = false;
    vm.menu = menuService;
    console.log(vm.menu);

    vm.status = {
    	isFirstOpen: true,
    	isFirstDisabled: false
    };


    isOpen = function (section) {
    	return vm.menu.isSectionSelected(section);
    }

    toggleOpen=function toggleOpen(section) {
    	vm.menu.toggleSelectSection(section);
    }
    
    vm.isOpen=isOpen;
    vm.toggleOpen = toggleOpen;

    $scope.menu=vm.menu;



    

    
});