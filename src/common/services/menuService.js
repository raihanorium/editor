angular.module('editorMenuModule')

	.factory('TopMenuService', [function () {
		var menu = [
				{
					text: 'File',
					link: '#',
					glyphicon: 'file',
					whenClicked: undefined,
					subItems: [
						{text: 'New File', link: '#/new-file', glyphicon: 'asterisk', whenClicked: 'newFile()', subItems: []},
						{text: 'Save', link: '#/save-file', glyphicon: 'save-file', whenClicked: undefined, subItems: []}
					]
				},
				{
					text: 'Edit',
					link: '#',
					glyphicon: 'edit',
				 	whenClicked: undefined,
					subItems: [
						{text: 'Sub Item 2-1', link: '#/subitem2-1', glyphicon: null, whenClicked: undefined, subItems: []},
						{text: 'Sub Item 2-2', link: '#/subitem2-2', glyphicon: null, whenClicked: undefined, subItems: []},
						{text: 'Sub Item 2-3', link: '#/subitem2-3', glyphicon: null, whenClicked: undefined, subItems: []}
					]
				},
				{text: 'Tools', link: '#/tools', glyphicon: 'wrench', whenClicked: undefined, subItems: []},
				{text: 'About', link: '#/about', glyphicon: 'info-sign', whenClicked: undefined, subItems: []}
			];
		
		return {
			getAsJson : function() {
				return menu;
			}
		};
	}])