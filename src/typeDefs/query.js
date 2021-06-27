const { gql } = require('apollo-server');

const query = gql`
	type Query {
		getCharacterSheets: [CharacterSheet]
		getCharacterSheet(id: ID!): CharacterSheet
	}

`;

module.exports = {
	query,
};