const { CharacterSheet } = require('../models');
const config = require('../../database/knexfile')
const knex = require('knex')(config);

const characterSheetsResolvers = {
	Query: {
		getCharacterSheets: async () => {
			return await CharacterSheet.getCharacterSheets(knex)()},
		getCharacterSheet: async (_, params) => {
			return await CharacterSheet.getCharacterSheet(knex)(params)},
	},

	Mutation: {
		createCharacterSheet: async (_, params) => {
			return await CharacterSheet.createCharacterSheet(knex)(params)
		},

		deleteCharacterSheet: async (_,params) => {
			return await CharacterSheet.deleteCharacterSheet(knex)(params)
		},

		updateCharacterSheet: async (_,params) => {
			return await CharacterSheet.updateCharacterSheet(knex)(params)
		},
	}
};


module.exports = {
	characterSheetsResolvers
};