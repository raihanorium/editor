angular.module('editorApp', [
		'editorCurrentFilesModule',
		'editorDirectivesModule',
		'editorComponentsModule',
		'ui.bootstrap'
	])

	.controller('AppCtrl', [function() {
		console.log('app initiated...');
	}])
;

// menu module
angular.module('editorMenuModule', []);

// current files module
angular.module('editorCurrentFilesModule', []);

// directives module
angular.module('editorDirectivesModule', ['editorMenuModule']);

// components module
angular.module('editorComponentsModule', []);