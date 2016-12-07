"use strict";

app.controller("newBoardCtrl", function($scope, AuthFactory, BoardFactory) {
	$scope.btnText = "Create Board";

	$scope.createBoard =  function () {
		let boardObject = {
			uid: AuthFactory.getUser(),
			Title: null,
			Description: null
		};
		console.log("made a board mom~");
		$scope.apply();
		return boardObject;
	};

	$scope.addBoard = function () {
		 BoardFactory.postNewBoard($scope.createBoard)
        .then((response) => {
        	$location.url("/items/list");
        	$scope.$apply();
        });
	};
});

