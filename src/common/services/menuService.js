angular.module('editorMenuModule')

	.factory('TopMenuService', [function () {
		
		return {
			getAsJson : function() {
				return {
					[
						{text: 'Item 1', link: '/item1', logo: null, subItems: []},
						{
							text: 'Item 2',
							link: '/item2',
							logo: null,
							subItems: [
								{text: 'Sub Item 1', link: '/subitem1', logo: null, subItems: []},
								{text: 'Sub Item 1', link: '/subitem1', logo: null, subItems: []},
								{text: 'Sub Item 1', link: '/subitem1', logo: null, subItems: []}
							]
						},
						{text: 'Item 3', link: '/item3', logo: null, subItems: []},
						{text: 'Item 4', link: '/item4', logo: null, subItems: []}
					]
				};
			}
		};
	}])