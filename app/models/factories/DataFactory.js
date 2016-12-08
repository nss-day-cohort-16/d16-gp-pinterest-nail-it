"use strict";

app.factory("DataFactory", function ($http, fbCreds, AuthFactory) {


	let postNewBoard = (boardObject) => {
		return new Promise( (resolve, reject) => {
			$http.post(`${fbCreds.databaseURL}/boards.json`, angular.toJson(boardObject))
			.success((boardObject) => {
				boardObject.id = boardObject.name;
				resolve(boardObject);
			})

		.error( (error) => {
			reject(error);
		  });
		});
	};


	let getAllBoards = function () {

		let boards = [];
    	return new Promise((resolve, reject) => {
    		$http.get(`${fbCreds.databaseURL}/boards.json`)
    		.success((boardObject) => {
    			let boardCollection = boardObject;
    			Object.keys(boardCollection).forEach((key => {
    				boardCollection[key].id = key;
    				boards.push(boardCollection[key]);
            let boardId = key;
            console.log("board id", boardId);
          }));
          resolve(boards);
        }).error((error) => {
          reject(error);
        });
      });
    };



let postNewPin = (pinObject, boardId) => {
    return new Promise( (resolve, reject) => {
      $http.post(`${fbCreds.databaseURL}/pins.json`, angular.toJson(pinObject))
      .success((pinObject) => {
        pinObject.boardId = boardId;
        console.log("current board", pinObject.boardId);
        resolve();
      })
    .error( (error) => {
      reject(error);
      });
    });
  };


let getAllPins = (boardId) => {
  let pins = [];

  return new Promise((resolve, reject) => {
        $http.get(`${fbCreds.databaseURL}/pins.json?OrderBy='${boardId}'`)
        .success((pinObject) => {
          let pinCollection = pinObject;
          Object.keys(pinCollection).forEach((key => {
            pinCollection[key].id = key;
            pins.push(pinCollection[key]);
          }))
          .resolve(pins);
        }).error((error) => {
          reject(error);
        });
      });
    };

	return {postNewBoard, getAllBoards, postNewPin, getAllPins};
});

