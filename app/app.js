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
	.when('/login', {
		templateUrl: 'view/partials/login.html',
		controller: 'loginCtrl'
	})
	.when('/allBoards', {
		templateUrl: 'view/partials/allBoards.html',
		controller: 'allBoards.Ctrl'
	})
	.otherwise('/login');

});