angular.module('editorDirectivesModule')

	.directive('currentFilesTabPanel', [function () {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('current-files-tab-panel');
		};

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/current-files-tab-panel.tpl.html',
			link: linkFunction
		};
	}])