const { gql } = require('apollo-server');

const query = gql`
	type Query {
		characterSheets: [CharacterSheet]
	}

`;

module.exports = {
	query,
};