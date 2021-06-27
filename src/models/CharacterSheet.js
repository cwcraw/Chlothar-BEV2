
class CharacterSheet {
  static getCharacterSheets(knex) {
    return async () => {
      let output = await knex('character_list').select();
      return output;
    };
  }

  static getCharacterSheet(knex) {
    return async (params) => {
      let output = await knex('character_list').where("id", params.id).first();
      return output
    };
  }

  static createCharacterSheet(knex) {
    return async (params) => {
      await knex("character_list")
      .insert(params)
      .returning("id");
    };
  }

  static deleteCharacterSheet(knex) {
    return async (params) => {
      let id = parseInt(params.id)
      let result = await knex("character_list")
        .where("id", id)
        .del();
    return !!result
    }
  }

  static updateCharacterSheet(knex) {
    return async (params) => {
      let id = parseInt(params.id)
      let result = await knex("character_list")
        .where("id", id)
        .update(params);
      return !!result
    }
  }
}

module.exports = {
  CharacterSheet
}