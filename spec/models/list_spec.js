//Testing for list model

var List = require('../../app/models/list');

describe('List',function(){

	it('should have a list name', function(){
		var list = new List();
		list.name = "Homework";
		expect(list.name).toBeTruthy();
	});

	it('should have a list description', function(){
		var list = new List();
		list.description = "This is a list of things you should do.";
		expect(list.description).toBe("This is a list of things you should do.");
	});

	it('should have a list id', function(){
		var list = new List();
		list.id = 1;
		expect(list.id).toBe(1);

	})

})