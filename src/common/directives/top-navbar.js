angular.module('editorDirectives')

	.directive('topNavbar', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true
		};
	}])