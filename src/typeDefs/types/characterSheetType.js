const { gql } = require('apollo-server');

const characterSheetType = gql`
	type CharacterSheet {
		id: ID!
		name: String
		race: String
  	str: Int
  	dex: Int
  	con: Int
  	int: Int
  	wis: Int
  	cha: Int
	}
`;

module.exports = {
	characterSheetType
};