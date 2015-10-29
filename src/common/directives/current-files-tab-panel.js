angular.module('editorDirectivesModule')

	.directive('currentFilesTabPanel', [function () {
		var linkFunction = function(scope, elem, attrs){
			elem.addClass('current-files-tab-panel');

			// resizing the edit area programmatically.
			var tabPanelTop = 90;

			var footer = $("footer")[0].getBoundingClientRect();
			var editBoxContainerHeight = footer.top - tabPanelTop;
			scope.maxHeight = editBoxContainerHeight;

			$(window).on("resize.doResize", function (){
				scope.$apply(function(){
					var footer = $("footer")[0].getBoundingClientRect();
					editBoxContainerHeight = footer.top - tabPanelTop;
	           		scope.maxHeight = editBoxContainerHeight;
	       		});
			});

			scope.$on("$destroy",function (){
	         	$(window).off("resize.doResize"); //remove the handler added earlier
	     	});
		};

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/current-files-tab-panel.tpl.html',
			link: linkFunction
		};
	}])