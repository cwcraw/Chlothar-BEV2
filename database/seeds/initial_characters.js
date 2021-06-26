exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character_list')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('character_list').insert([
        {
          id: 1,
          name: 'Chlothar',
          race: 'Dwarf',
          str: '1',
          dex: '2',
          con: '3',
          int: '4',
          wis: '5',
          cha: '6',
        },
        {
          id: 2,
          name: 'Ashbor',
          race: 'Gnome',
          str: '2',
          dex: '3',
          con: '4',
          int: '5',
          wis: '6',
          cha: '7',
        },
        {
          id: 3,
          name: 'Tuoba',
          race: 'Human',
          str: '2',
          dex: '2',
          con: '3',
          int: '3',
          wis: '2',
          cha: '1',
        },
      ]);
    });
};