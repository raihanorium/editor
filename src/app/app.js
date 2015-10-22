angular.module('editorApp', ['editorMenuModule', 'editorDirectivesModule'])

	.controller('AppCtrl', ['TopMenuService', function(TopMenuService) {
		console.log('app initiated...');
		console.log(TopMenuService.getAsJson());
	}])
;

// menu module
angular.module('editorMenuModule', []);

// directives module
angular.module('editorDirectivesModule', []);