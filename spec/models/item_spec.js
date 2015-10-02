//Testing for item model

var Item = require('../../app/models/item');

describe('Item',function(){

	it('should have an item name', function(){
		var item = new Item();
		item.name = "Bacon";
		expect(item.name).toBeTruthy();
	});

	it('should have an item description', function(){
		var item = new Item();
		item.description = "This is Potato.";
		expect(item.description).toBe("This is Potato.");
	});

	it('should have an item id', function(){
		var item = new Item();
		item.id = 1;
		expect(item.id).toBe(1);

	});

	it('should have a list_id', function(){
		var item = new Item();
		item.list_id = 1;
		expect(item.list_id).toBe(1);
	});

})