app
    .directive('menuToggle', ['$timeout', function ($timeout ) {
      return {
        scope: {
            //Usar @para para obtener una string statica
          sectionName: '=',
          section: '='
        },
        templateUrl: 'templates/menu-toggle.html',
        link: function (scope, element) {
          var controller = element.parent().controller();


          scope.isOpen = function () {

            return controller.isOpen(scope.section);
          };
          scope.toggle = function () {
            controller.toggleOpen(scope.section);
          };
          
          var parentNode = element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }
      };
    }])