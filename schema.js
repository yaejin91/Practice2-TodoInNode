var knex = require('knex')({
	client = 'pg',
	connection: {
		host : 'localhost',
		user : 'parky',
		password : 'password',
		database: 'todo'
	}
})

var bookshelf = require('bookshelf')(knex);

//Dependency
bookshelf.plugin('registry');

//List (of Things to do) Columns: Name, Description
bookshelf.knex.schema.hasTable('lists')
.then(function (exists) {
	if(!exists){
		bookshelf.knex.schema.createTable('lists', function (list){
			list.increments('id').primary();
			list.string('name',150).unique().notNullable();
			list.string('description',500).notNullable();
			list.timestamps();
		})
		.then(function (table){
			console.log('Table for lists is created.',table)
		});
	}
});

//Items Column: List_id, Name, Description
bookshelf.knex.schema.hasTable('items')
.then(function (exists) {
	if(!exists){
		bookshelf.knex.schema.createTable('items', function (item){
			item.increments('id').primary();
			item.string('list_id',255);
			item.string('name',150).unique().notNullable();
			item.string('description',500).notNullable();
			item.timestamps();
		})
		.then(function (table){
			console.log('Table for items is created.',table)
		});
	}
});

module.exports = bookshelf;