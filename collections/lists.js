var bookshelf = require('../schema');
var List = require('../models/list');

//creating Collections
var Lists = new bookshelf.Collection();

Lists.model = List;

module.exports = Lists;