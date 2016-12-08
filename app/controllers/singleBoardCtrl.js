"use strict";
app.controller("singleBoardCtrl", function(DataFactory, $scope, $routeParams) {
  $scope.test = "hi";
  console.log("hey", $routeParams.boardId);

  let newPin = {
    boardId: $routeParams.boardId,
    title: "",
    image: ""
  }
})