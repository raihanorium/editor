angular.module('editorDirectivesModule')

	.directive('editorEditBox', [function () {
		var linkFunction = function(scope, elem, attrs) {
			console.log(elem);
			scope.text = elem.text();
		}

		return {
			scope: {},
			replace: true,
			transclude: true,
			restrict: 'E',
			templateUrl: 'app/editor-edit-box.tpl.html',
			link: linkFunction
		};
	}])