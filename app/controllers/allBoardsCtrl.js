"use strict";
app.controller("allBoardsCtrl", function ($scope, $http, DataFactory ) {


	 DataFactory.getAllBoards()
    .then( (boardArray) => {
        $scope.boards = boardArray;
        $scope.$apply();
    });
});