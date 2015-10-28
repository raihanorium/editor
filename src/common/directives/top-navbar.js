angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', 'CurrentFilesService', 'ModalService', function (TopMenuService, CurrentFilesService, ModalService) {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('top-navbar');
			scope.menu_items = TopMenuService.getAsJson();

			scope.newFile = function() {
				// calling new file dialog
				ModalService.showNewFileDialog().then(function (result) {
					var newFile = {name: result.fileName};

					CurrentFilesService.addNewFile(newFile);
				});
			}
		};

		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true,
			link: linkFunction
		};
	}])

	.directive("setOnClick", ['$compile', function($compile){
		return {
			replace: true,
			restrict: "A",
			link: function(scope, elem, attrs){
				elem.attr("ng-click", attrs.setOnClick);
				elem.removeAttr("set-on-click");
				$compile(elem)(scope);
			}
		};
	}])