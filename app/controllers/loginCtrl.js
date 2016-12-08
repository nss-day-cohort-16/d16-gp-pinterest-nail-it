"use strict"; 

app.controller('loginCtrl', function($scope, AuthFactory, $window){
	$scope.account = {
		email: "", 
		password: "" //could also be null
	};

	// let currentUser= null; 

	// let createUser = function(userObj) {
	// 	return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);

	// };

	

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
		.then( (userData) => {
			$scope.login();
			console.log("user registered"); 
		});
	};
	$scope.login = (user) => {
		// currentUser = user.uid;
		AuthFactory.loginUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/allBoards"; 
					console.log('user logged in', user.uid);


		});
	};
		$scope.logout = () => {
		AuthFactory.logoutUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/items/list"; 
					console.log('user logged out');
				});
			};

		


	}); 