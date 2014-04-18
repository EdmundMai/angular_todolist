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
		if ($scope.chore.name) {
			$scope.chores.push({name: $scope.chore.name, hours: 2});
			$scope.chore.name = '';
		} else {
			alert("none");
		}
	};
	$scope.removeChore = function(unwanted_chore) {
		var index = $scope.chores.indexOf(unwanted_chore);
		console.log($scope.chores.length);
		alert($scope.chores.length);
		$scope.chores.splice(index, 1);
		console.log($scope.chores.length);
		console.log($scope.chores);
		// $scope.$apply();
	};
});