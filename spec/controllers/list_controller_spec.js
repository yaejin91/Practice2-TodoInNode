var ListController = require("../../controllers/list_controller.js")

describe('ListController', function(){
	it('should return an empty list', function(){
		var emptylist = ListController.index();
		expect(emptylist).toEqual([]);
	});

	
})