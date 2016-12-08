"use strict";

app.controller("pinCtrl", function($scope, AuthFactory, $location, DataFactory) {
	$scope.nailBtn = "Nail It!";
	// let pinUser = AuthFactory.getUser();



	$scope.addPin = function () {
		console.log("uid", $scope.pinObject);
		DataFactory.postNewPin($scope.pinObject)
		.then((response) => {

			$location.url('/allBoards');
		});
	};
});




































