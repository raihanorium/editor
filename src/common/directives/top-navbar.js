angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', 'CurrentFilesService', function (TopMenuService, CurrentFilesService) {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('top-navbar');
			scope.menu_items = TopMenuService.getAsJson();

			scope.newFile = function() {
				console.log('clicked on newFile()...');
				var newFile = {
					name: 'new file',
					text: 'text in file'
				};
				CurrentFilesService.addNewFile(newFile);
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