var toDoListApp = angular.module('toDoListApp', ['ngRoute']);

toDoListApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when(
		'/',
		{
			templateUrl: 'partials/chores.html',
			controller: 'ChoresController'
		});
	$routeProvider.otherwise(
		{
			redirectTo: '/'	
		}
	)
}]);