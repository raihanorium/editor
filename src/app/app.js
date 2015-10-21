angular.module('editorApp', ['editorMenuModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['TopMenuService', function(TopMenuService) {
		console.log('app initiated...');
		TopMenuService.getAsJson();
	}])
;

// menu module
angular.module('editorMenuModule', []);

// directives module
angular.module('editorDirectivesModule', []);