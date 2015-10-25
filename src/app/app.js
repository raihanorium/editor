angular.module('editorApp', ['editorCurrentFilesModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['$scope', 'CurrentFilesService', 'TopMenuService', function($scope, CurrentFilesService, TopMenuService) {
		console.log('app initiated...');

		$scope.showAllFiles = function() {
			CurrentFilesService.getCurrentFiles();
		};
	}])
;

// menu module
angular.module('editorMenuModule', []);

// current files module
angular.module('editorCurrentFilesModule', []);

// directives module
angular.module('editorDirectivesModule', ['editorMenuModule']);