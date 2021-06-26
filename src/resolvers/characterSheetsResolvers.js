const { CharacterSheet } = require('../models');
const characterSheetsResolvers = {
	Query: {
		characterSheets: () => {
			return CharacterSheet.all()},
	},
};

module.exports = {
	characterSheetsResolvers
};