toDoListApp.controller("ChoresController", function($scope, choresFactory) {
	function init() {
		choresFactory.getChores().success(function(data) {
			$scope.chores = data;
			console.log(data);
		});
	}
	
	init();

	$scope.submit = function() {
		if ($scope.name && $scope.hours) {
			$scope.chores.push({name: $scope.name, hours: $scope.hours});
			$scope.name = '';
		}
	};
	$scope.removeChore = function(unwanted_chore) {
		var index = $scope.chores.indexOf(unwanted_chore);
		$scope.chores.splice(index, 1);
		$scope.chores;
	};
});