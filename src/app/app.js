angular.module('editorApp', ['editorCurrentFilesModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['$scope', 'CurrentFilesService', 'TopMenuService', function($scope, CurrentFilesService, TopMenuService) {
		console.log('app initiated...');

		console.log('calling TopMenuService...');
		console.log(TopMenuService.getAsJson());
		
		console.log('calling service...');
		console.log(CurrentFilesService.getCurrentFiles());

		$scope.newFile = function() {
			console.log('clicked on newFile()...');
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