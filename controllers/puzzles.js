const db = require('../models')

const index = (req, res) => {
	db.Puzzle.find({}, (err, foundPuzzles) => {
		if (err) console.log('Error in Puzzles#index:', err)

		if (!foundPuzzles) return res.json({
			message: "No puzzles were found in the database."
		})

		res.status(200).json({ puzzles: foundPuzzles })
	})
}

const singleScramble = (req, res) => {
	db.Puzzle.countDocuments({ puzzleType: 'scramble' }, function (err, count) {
		let random = Math.floor(Math.random() * count)
		db.Puzzle.findOne({ puzzleType: 'scramble' }).skip(random).exec(
			function (err, result) {
				result = result.toJSON();
				result.answerKey = result.answerKey.split('');
				res.status(200).json({ puzzles: result })
			})
		})
	}

const singleCipher = (req, res) => {
	db.Puzzle.countDocuments({ puzzleType: 'cipher' }, function (err, count) {
		let random = Math.floor(Math.random() * count)
		db.Puzzle.findOne({ puzzleType: 'cipher' }).skip(random).exec(
			function (err, result) {
				result = result.toJSON();
				result.answerKey = result.answerKey.split('');
				res.status(200).json({ puzzles: result })
			})
		})
	}

	const singleSymbol = (req, res) => {
		db.Puzzle.countDocuments({ puzzleType: 'symbol' }, function (err, count) {
			let random = Math.floor(Math.random() * count)
			db.Puzzle.findOne({ puzzleType: 'symbol' }).skip(random).exec(
				function (err, result) {
					result = result.toJSON();
					result.answerKey = result.answerKey.split('');
					res.status(200).json({ puzzles: result })
				})
			})
		}

		const singleTileLoc = (req, res) => {
			db.Puzzle.countDocuments({ puzzleType: 'tileloc' }, function (err, count) {
				let random = Math.floor(Math.random() * count)
				db.Puzzle.findOne({ puzzleType: 'tileloc' }).skip(random).exec(
					function (err, result) {
						result = result.toJSON();
						result.answerKey = result.answerKey.split('');
						res.status(200).json({ puzzles: result })
					})
				})
			}

const show = (req, res) => {
	db.Puzzle.findById(req.params.id, (err, foundPuzzle) => {
		if (err) console.log('Error in puzzle#show:', err)
		
		if (!foundPuzzle) return res.json({
			message: "No puzzle was found with that ID."
		})
		res.status(200).json({ puzzle: foundPuzzle })
	})
}

const create = (req, res) => {
	console.log("This is the req body", req.body);
	db.Puzzle.create(req.body, (err, savedPuzzle) => {
		if (err) console.log('Error in puzzle#create:', err)

		res.status(200).json({ puzzle: savedPuzzle })
	})
}

const update = (req, res) => {
	db.Puzzle.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPuzzle) => {
		if (err) console.log('Error in puzzle#update:', err)
		if (!updatedPuzzle) return res.json({ message: "Unable to update puzzle."})

		res.status(200).json({ puzzle: updatedPuzzle })
	})
}

const destroy = (req, res) => {
	db.Puzzle.findByIdAndDelete(req.params.id, (err, deletedPuzzle) => {
		if (err) console.log('Error in puzzle#destroy:', err)
		if (!deletedPuzzle) return res.json({ message: "Unable to delete puzzle." })

		res.status(200).json({ puzzle: deletedPuzzle })
	})
}

module.exports = {
	index, singleScramble, singleCipher, singleSymbol, singleTileLoc, show, create, update, destroy
}