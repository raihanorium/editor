angular.module('editorApp')

	.directive('topNavbar', [function () {
		return {
			restrict: 'E',
			link: function (scope, iElement, iAttrs) {
				console.log(iElement);
			}
		};
	}])