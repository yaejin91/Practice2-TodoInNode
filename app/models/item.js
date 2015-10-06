var bookshelf = require('../../database/schema');

var Item = bookshelf.Model.extend({
	tableName: 'items',
	hasTimestamps: true,
	list: function (){
		return this.belongsTo('List', 'list_id');
	}

})

module.exports = bookshelf.model('Item', Item)