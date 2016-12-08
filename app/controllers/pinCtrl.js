"use strict";

app.controller("pinCtrl", function($scope, AuthFactory, $location, PinFactory) {
	$scope.nailBtn = "Nail It!";
	// let pinUser = AuthFactory.getUser();

	$scope.pinObject = {
		title: "",
		image: "",
		uid: "",
		boardId: ""
	};

	$scope.addPin = function () {
		console.log("uid", $scope.pinObject);
		PinFactory.postNewPin($scope.pinObject)
		.then((response) => {

			$location.url('/allBoards');
		});
	};
});




































