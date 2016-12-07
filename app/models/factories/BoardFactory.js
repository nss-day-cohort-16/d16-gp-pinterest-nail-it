"use strict";
app.factory("BoardFactory", function ($http, fbCreds ) {

	let postNewBoard = (boardObject) => {
		return new Promise( (resolve, reject) => {
			$http.post(`${fbCreds.URL}/boards.json`, angular.toJson(boardObject))
			.success((boardObject) => {
				resolve(boardObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};



	return {postNewBoard};
});