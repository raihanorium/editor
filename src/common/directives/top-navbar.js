angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', function (TopMenuService) {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true,
			link: function(scope, elem, attrs){
				scope.menu_items = TopMenuService.getAsJson();
			}
		};
	}])