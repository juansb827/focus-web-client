app.controller("MainController", function($scope,$resource,$location,$routeParams,$rootScope,$timeout,storageService,menuService){
	   var vm=this;
	   menuService.setMenu(storageService.getMenu());
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
	/////////
	$scope.showDrawer=false;
	var logged=storageService.isLogged();
	console.log("isLogged",logged);

	

	$scope.init=function(){
		console.log("init");
		$scope.empresa=storageService.getEmpresa();
		//var menu=storageService.getMenu();
		console.log("onInit.menu",$scope.menu);
		$scope.menuItems=Object.keys($scope.menu);				
		$scope.showDrawer=true;
	}

	$scope.oneAtATime = true;
	
	$scope.startApp=function(){
		$scope.init();
	}

	if(logged){
		$scope.startApp();
	}

	//Hace que sirva Material design lite
	$rootScope.$on('$viewContentLoaded', function() {
		$timeout(function() {
	//		componentHandler.upgradeAllRegistered();
			console.log("succces");
			
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


    
 



    

    
});