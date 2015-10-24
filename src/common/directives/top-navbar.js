angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', function (TopMenuService) {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true,
			link: function(scope, elem, attrs){
				elem.addClass('top-navbar');
				scope.menu_items = TopMenuService.getAsJson();
			}
		};
	}])

	.directive("setOnClick", ['$compile', function($compile){
		return {
			restrict: "A",
			link: function(scope, elm, attrs){
				elm.attr("ng-click", attrs.setOnClick);
				elm.removeAttr("set-on-click");
				$compile(elm)(scope);
			}
		};
	}])