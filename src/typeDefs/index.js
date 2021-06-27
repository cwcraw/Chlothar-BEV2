const { query } = require('./query');
const { mutation } = require('./mutation');
const { characterSheetType } = require('./types');

const typeDefs = [query, mutation, characterSheetType];

module.exports = {
	typeDefs,
};