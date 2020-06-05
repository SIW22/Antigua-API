// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.puzzles.index)
router.get('/:id', ctrl.puzzles.show)
router.post('/', ctrl.puzzles.create)
router.put('/:id', ctrl.puzzles.update)
router.delete('/:id', ctrl.puzzles.destroy)

// exports
module.exports = router