angular.module('editorApp', ['editorCurrentFilesModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['$scope', 'CurrentFilesService', function($scope, CurrentFilesService) {
		console.log('app initiated...');
		
		console.log('calling service...');
		console.log(CurrentFilesService.getCurrentFiles());

		$scope.newFile = function() {
			var newFile = {
				text: 'text in file'
			};
			CurrentFilesService.addNewFile(newFile);
		}
	}])
;

// menu module
angular.module('editorMenuModule', []);

// current files module
angular.module('editorCurrentFilesModule', []);

// directives module
angular.module('editorDirectivesModule', ['editorMenuModule']);