"use strict";

app.controller("newBoardCtrl", function($scope, AuthFactory, $location, DataFactory) {
	$scope.btnText = "Create Board";
  let cool = AuthFactory.getUser();

		$scope.boardObject = {
			uid: null,
			Title: null,
			Description: null,
      // pin: $scope.pinObject
		};



	$scope.addBoard = function () {
		// console.log('scope.boardObj', uid);
		 DataFactory.postNewBoard($scope.boardObject)
        .then((response) => {
        	$location.url('/allBoards');

        });
	};
});

