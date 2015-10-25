angular.module('editorDirectivesModule')

	.directive('topNavbar', ['TopMenuService', 'CurrentFilesService', 'ModalService', function (TopMenuService, CurrentFilesService, ModalService) {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('top-navbar');
			scope.menu_items = TopMenuService.getAsJson();

			scope.newFile = function() {
				console.log('clicked on newFile()...');

				// calling modal
				var modalOptions = {
					closeButtonText: 'Cancel',
					actionButtonText: 'Create',
					headerText: 'Delete?',
					bodyText: 'Are you sure you want to delete this customer?'
				};

				ModalService.showModal({}, modalOptions).then(function (result) {
					var newFile = {
						name: 'new file',
						text: 'text in file'
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