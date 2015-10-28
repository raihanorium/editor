angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', 'CurrentFilesService', 'ModalService', function (TopMenuService, CurrentFilesService, ModalService) {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('top-navbar');
			scope.menu_items = TopMenuService.getAsJson();

			scope.newFile = function() {
				// calling modal
				var modalOptions = {
					closeButtonText: 'Cancel',
					actionButtonText: 'Create',
					headerText: 'New File',
					bodyText: 'Please enter a name for the file'
				};

				ModalService.showModal({templateUrl:'app/modal-dialog-new-file.tpl.html'}, modalOptions).then(function (result) {
					console.log(result);
					var newFile = {
						name: result.fileName,
						text: 'text in file ' + new Date()
					};
					CurrentFilesService.addNewFile(newFile);
				});
			}
		};

		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'app/top-navbar.tpl.html',
			replace: true,
			link: linkFunction
		};
	}])

	.directive("setOnClick", ['$compile', function($compile){
		return {
			replace: true,
			restrict: "A",
			link: function(scope, elem, attrs){
				elem.attr("ng-click", attrs.setOnClick);
				elem.removeAttr("set-on-click");
				$compile(elem)(scope);
			}
		};
	}])