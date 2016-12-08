"use strict";

app.controller("newBoardCtrl", function($scope, AuthFactory, $location, BoardFactory) {
	$scope.btnText = "Create Board";
let cool = AuthFactory.getUser(); 
	
		$scope.boardObject = {
			uid: null,
			Title: null,
			Description: null
		};



	$scope.addBoard = function () {
		// console.log('scope.boardObj', uid);
		 BoardFactory.postNewBoard($scope.boardObject)
        .then((response) => {
        	$location.url('/allBoards');
        	
        });
	};
});

