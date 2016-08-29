app.factory("storageService",function(localStorageService){
	var storageService={};
	var key="focusweb-storage-empresa";
	storageService.key=key;

	if(localStorageService.get(key)){
		storageService.data=localStorageService.get(key);
	}else{
		storageService.data={};
	}	

	storageService.saveEmpresa= function(empresa){
		storageService.data.empresa=empresa;
		storageService.updateLocalStorage();
	};	

	storageService.isLogged= function(){
		return storageService.data.logged;
	}

	storageService.setLogged=function(logged)
	{
		storageService.data.logged=logged;
		console.log("setLoged"+logged);		
		storageService.updateLocalStorage();
	}



	storageService.saveMenu= function(menu){
		storageService.data.menu=menu;
		storageService.updateLocalStorage();
	}
	storageService.getEmpresa= function(empresa){
		return storageService.data.empresa;
		
	};	

	storageService.getMenu= function(){
		return storageService.data.menu;
		
	};	

	storageService.updateLocalStorage=function(){
		localStorageService.set(key, storageService.data);
	};

	storageService.clean=function(){
		storageService.data={};
		storageService.updateLocalStorage();
	};
	return storageService;
});
