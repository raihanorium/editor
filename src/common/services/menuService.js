angular.module('editorMenuModule')

	.factory('TopMenuService', [function () {
		var menu = [
				{
					text: 'File',
					link: '#',
					glyphicon: 'file',
					subItems: [
						{text: 'New File', link: '#/new-file', glyphicon: 'asterisk', subItems: []},
						{text: 'Save', link: '#/save-file', glyphicon: 'save-file', subItems: []}
					]
				},
				{
					text: 'Edit',
					link: '#',
					glyphicon: 'edit',
					subItems: [
						{text: 'Sub Item 2-1', link: '#/subitem2-1', glyphicon: null, subItems: []},
						{text: 'Sub Item 2-2', link: '#/subitem2-2', glyphicon: null, subItems: []},
						{text: 'Sub Item 2-3', link: '#/subitem2-3', glyphicon: null, subItems: []}
					]
				},
				{text: 'Tools', link: '#/tools', glyphicon: 'wrench', subItems: []},
				{text: 'About', link: '#/about', glyphicon: 'info-sign', subItems: []}
			];
		
		return {
			getAsJson : function() {
				return menu;
			}
		};
	}])