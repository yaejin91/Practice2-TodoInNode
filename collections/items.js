var bookshelf = require('../schema');
var Item = require('../models/item');

//creating Collections
var Items = new bookshelf.Collection();

Items.model = Item;

module.exports = Items;