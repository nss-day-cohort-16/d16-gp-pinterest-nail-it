"use strict"; 

var app = angular.module("nailIt", []); 

app.run (($location, fbCreds) => {
	let creds = fbCreds; 
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	}; 
	firebase.initializeApp(authConfig); 
}); 