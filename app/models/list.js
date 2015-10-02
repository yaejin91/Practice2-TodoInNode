var bookshelf = require('../../database/schema')
//Because I did the dependency registry, this is possible.

var List = bookshelf.Model.extend({
	tableName: 'lists',
	hasTimestamps: true,
	items: function (){
		return this.hasMany('Item', 'list_id')
	}

})

module.exports = bookshelf.model('List', List)
//Now you have the 'List' model inside the bookshelf.
//All of the code above is getting pushed inside the bookshelf.model ('List')