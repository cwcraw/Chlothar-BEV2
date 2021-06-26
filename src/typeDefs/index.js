const { query } = require('./query');
const { characterSheetType } = require('./types');

const typeDefs = [query, characterSheetType];

module.exports = {
	typeDefs,
};