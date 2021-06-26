const { gql } = require('apollo-server');

const characterSheetType = gql`
	type CharacterSheet {
		name: String
	}
`;

module.exports = {
	characterSheetType
};