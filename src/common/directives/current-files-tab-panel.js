angular.module('editorDirectivesModule')

	.directive('currentFilesTabPanel', ['CurrentFilesService', function (CurrentFilesService) {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('current-files-tab-panel');

			scope.close = function(fileId) {
				CurrentFilesService.closeFile(fileId);
			};
		};

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/current-files-tab-panel.tpl.html',
			link: linkFunction
		};
	}])