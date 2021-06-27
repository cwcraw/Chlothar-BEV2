const { gql } = require('apollo-server');

const mutation = gql`
  type Mutation {
    createCharacterSheet(
      name: String!
      race: String!
      str: Int!
      dex: Int!
      con: Int!
      int: Int!
      wis: Int!
      cha: Int!
    ): CharacterSheet

    deleteCharacterSheet(
      id: ID!
    ): Boolean

    updateCharacterSheet(
      id: ID!
      name: String
      race: String
      str: Int
      dex: Int
      con: Int
      int: Int
      wis: Int
      cha: Int
    ): Boolean
  }
`;

module.exports = {
  mutation,
};