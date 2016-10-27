app.factory("menuService",function($location,storageService){

    var menuService={};
    console.log("onCreateMenuService");
    var menu=storageService.getMenu();

    if(!menu) menu={};
    console.log("usign menu", menu);
    menuSections=Object.keys(menu);

    menuService.sections=  menuSections;

    menuService.menu=menu;


    menuService.toggleSelectSection=function (section) {
      self.openedSection = (self.openedSection === section ? null : section);
    };

    menuService.isSectionSelected=function (section) {
            return self.openedSection === section;
    };

    menuService.selectPage= function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
    }

    menuService.setMenu=function(){

    }
    
    return menuService;








        function sorrtByHumanName(a, b) {
          return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
        }
})