toDoListApp.controller("ChoresController", function($scope) {
	$scope.chores = [{
		name: "laundry",
		hours: 3
	},
	{
		name: "dishes",
		hours: 0.5
	}
	];
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