"use strict"; 

app.controller('loginCtrl', function($scope, AuthFactory, $window){
	$scope.account = {
		email: "", 
		password: "" //could also be null
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
		.then( (userData) => {
			$scope.login();
			console.log("user registered"); 
		});
	};
	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/items/list"; 
					console.log('user logged in');


		});
		$scope.logout = () => {
		AuthFactory.logoutUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/items/list"; 
					console.log('user logged out');
				})
			};

		


	};
}); 