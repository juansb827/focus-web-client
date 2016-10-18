app.controller("MenuController", function($scope,$routeParams,$rootScope,$timeout,menuService){
	//more like formController
	$scope.include='forms/form3.html';
	if(!$routeParams.formName){
		console.log("formName==null usando default form");	
		$scope.include='templates/table.html';
	}
	

    $scope.oneAtATime = true;
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