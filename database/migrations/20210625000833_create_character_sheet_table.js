
exports.up = function(knex) {
  return knex.schema.createTable('character_list', t => {
    t.increments().index();

    t.string('name').notNullable();

    t.string('race').notNullable();

    t.integer('str').notNullable();
  
    t.integer('dex').notNullable();

    t.integer('con').notNullable();

    t.integer('int').notNullable();

    t.integer('wis').notNullable();

    t.integer('cha').notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('character_list');
};
