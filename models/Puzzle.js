const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuzzleSchema = new Schema({
	puzzleType: {
		type: String,
		required: true,
	},
	imageFile: {
		type: String,
		required: true,
	},
	clue: {
		type: String,
		required: false,
	},
	answerKey: {
		type: String,
		required: true,
	},
	difficulty: {
		type: Number,
		required: true,
	},
	completed: Boolean
})

const Puzzle = mongoose.model('Puzzle', PuzzleSchema);

module.exports = Puzzle