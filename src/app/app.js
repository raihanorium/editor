angular.module('editorApp', ['editorCurrentFilesModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['$scope', 'CurrentFilesService', 'TopMenuService', function($scope, CurrentFilesService, TopMenuService) {
		console.log('app initiated...');

		console.log('calling TopMenuService...');
		console.log(TopMenuService.getAsJson());
		
		console.log('calling service...');
		console.log(CurrentFilesService.getCurrentFiles());

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