toDoListApp.factory("choresFactory", function($http) {
	return {
		getChores : function() {
			return $http({
				url: '/chore.json',
				method: 'GET',
				cache: false
			})
		}
	}
});

