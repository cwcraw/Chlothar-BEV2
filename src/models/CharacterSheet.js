const { characterSheets } = require('../data')

class CharacterSheet {
	static all() {
		return characterSheets
		}
	}

module.exports = {
	CharacterSheet
}