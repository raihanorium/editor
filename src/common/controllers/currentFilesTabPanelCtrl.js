angular.module('editorApp')

	.controller('CurrentFilesTabPanelCtrl', ['$scope', 'CurrentFilesService', function ($scope, CurrentFilesService) {
		$scope.currentFiles = CurrentFilesService.getCurrentFiles();

		$scope.close = function(event, fileId) {
			event.preventDefault();
			CurrentFilesService.closeFile(fileId);
		};
	}])