angular.module('editorDirectivesModule')

	.directive('topNavbar', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true
		};
	}])