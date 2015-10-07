// var express = require('express'),
//     app = express(),
//     path = require('path'),
//     bodyParser = require('body-parser'),
    // httpMocks = require('node-mocks-http'),
var     request = require('request'),
		List = require('../../app/models/list'),
        Lists = require('../../app/collections/lists');
 	// ListController = require("../../app/controllers/list_controller.js");

describe('ListController', function(){
	//Test List Index
	it('should index the list', function (done){
		request.get('http://localhost:3000/lists', function (error,response,body){
			expect(response.statusCode).toBe(200);
			expect(response.req.path).toBe('/lists');
			done();
		});
	});

	//Test List Create
	it('should create new list', function (done){
		var options = {
			url:'http://localhost:3000/lists/create',
			method: 'POST',
			form:{
				name: "wtf",
				description: "This is a new list"
			}
		}

		request(options, function (error,response,body){
			expect(response.statusCode).toBe(302);
			var lists = Lists;
			lists.fetch()
			.then(function (data){
				console.log(data.toJSON());

				expect(data.toJSON().length).toBe(1);
			})
			.catch(function (error){
				console.log("Error here");
				expect(1).toBe(2);
			});
			done();
		});
	});

	//Test creating new list
	// it('should create a new list', function(){
	// 	var response = httpMocks.createResponse();
	// 	var request = httpMocks.createRequest({
	// 		method: 'POST',
	// 		url:'/lists',
	// 		params:{
	// 			name: 'Creating a new List',
	// 			description: 'Create new list success'
	// 		}
	// 	});

	// 	ListController.create(request,response);
	// 	var list = List.forge({
	// 			name: 'Creating a new List',
	// 			description: 'Create new list success'
	// 		}).save()

	// 	// .then(function (data){
	// 	// 	console.log(data.toJSON());
	// 	// })
	// 	console.log(list.name + " This is the list name");
	// 	// var data = list.fetch();
	// 	expect(list.length).toBeTruthy();
	// });

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