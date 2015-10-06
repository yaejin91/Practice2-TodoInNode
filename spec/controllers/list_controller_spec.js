var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    httpMocks = require('node-mocks-http'),
    List = require('../../app/models/list'),
    Lists = require('../../app/collections/lists');
 	ListController = require("../../app/controllers/list_controller.js");

describe('ListController', function(){

	//Test creating new list
	it('should create a new list', function(){
		var response = httpMocks.createResponse();
		var request = httpMocks.createRequest({
			method: 'POST',
			url:'/lists',
			params:{
				name: 'Creating a new List',
				description: 'Create new list success'
			}
		});

		ListController.create(request,response);
		var list = List.forge({
				name: 'Creating a new List',
				description: 'Create new list success'
			}).save()

		// .then(function (data){
		// 	console.log(data.toJSON());
		// })
		console.log(list.name + " This is the list name");
		// var data = list.fetch();
		expect(list.length).toBeTruthy();
	});

	// //Test updating existing lists
	// it('should update the existing list', function(){
	// 	var list = ListController.update({

	// 	});
	// 	expect(list).toBeTruthy();
	// });

	// //Test deleting existing list
	// it('should destroy the existing', function(){
	// 	var id = 1;
	// 	var list = ListController.destroy(id);
	// 	expect(list).toBeFalsy();
	// });

	//Test existing lists index
	// it('should list the existing list', function(){
	// 	var id = 1;
	// 	req = httpMocks.createRequest();
	// 	res = httpMocks.createResponse({EventEmitter: require('events').EventEmitter});
	// 	ListController.index(req,res);
	// 	res.on('render',function(){
	// 		console.log("Success!");
	// 	});
	// 	// var data = JSON.parse(res._getData());
	// 	// console.log(data);
	// 	// expect(list.id).toEqual(id);
	// });

	//Test showing existing lists
	// it('should show the existing list', function(){
	// 	var id = 1;
	// 	var list = ListController.show(id);
	// 	expect(list.id).toEqual(id);
	// });
});