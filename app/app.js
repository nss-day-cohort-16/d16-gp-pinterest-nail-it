"use strict";

var app = angular.module("nailIt", ["ngRoute"]);

app.run (($location, fbCreds) => {
	let creds = fbCreds;
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL

	};
	firebase.initializeApp(authConfig);
});

app.config( function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/partials/login.html',
		controller: 'loginCtrl'

	})
	.when('/login', {
		templateUrl: 'view/partials/login.html',
		controller: 'loginCtrl'
	})
	.when('/allBoards', {
		templateUrl: 'view/partials/allBoards.html',
		controller: 'allBoardsCtrl'
	})
	.when('/newBoard', {
		templateUrl: 'view/partials/newBoard.html',
		controller: 'newBoardCtrl'
	})
	.when('/board/:boardId', {
		templateUrl: 'view/partials/boardDetail.html',
		controller: 'singleBoardCtrl'
	})
	.otherwise('/allBoards');

});



