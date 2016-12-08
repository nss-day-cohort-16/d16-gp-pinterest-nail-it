"use strict";

app.factory("PinFactory", function($http, fbCreds){

let postNewPin = (pinObject) => {
		return new Promise( (resolve, reject) => {
			$http.post(`${fbCreds.databaseURL}/pins.json`, angular.toJson(pinObject))
			.success((pinObject) => {
				let pinId = pinObject.name;
				$http.put(`${fbCreds.databaseURL}/pins/${pinId}.json`, pinObject)
				resolve(pinObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};




let getAllPins = () => {
	let pins = [];

	return new Promise((resolve, reject) => {
    		$http.get(`${fbCreds.databaseURL}/pins.json?OrderBy='${pinId}'`)
    		.success((pinObject) => {
    			let pinCollection = pinObject;
    			Object.keys(pinCollection).forEach((key => {
    				pinCollection[key].id = key;
    				pins.push(pinCollection[key]);
    			}));
    			resolve(pins);
    		}).error((error) => {
    			reject(error);
    		});
    	});
    };
});
