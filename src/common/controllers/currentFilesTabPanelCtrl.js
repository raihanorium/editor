angular.module('editorApp')

	.controller('CurrentFilesTabPanelCtrl', ['$scope', 'CurrentFilesService', function ($scope, CurrentFilesService) {
		$scope.currentFiles = CurrentFilesService.getCurrentFiles();
	}])