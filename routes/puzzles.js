// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.puzzles.index)
router.get('/scramble', ctrl.puzzles.singleScramble)
router.get('/cipher', ctrl.puzzles.singleCipher)
router.get('/symbol', ctrl.puzzles.singleSymbol)
router.get('/tileloc', ctrl.puzzles.singleTileLoc)
router.get('/:id', ctrl.puzzles.show)
router.post('/', ctrl.puzzles.create)
router.put('/:id', ctrl.puzzles.update)
router.delete('/:id', ctrl.puzzles.destroy)

// exports
module.exports = router