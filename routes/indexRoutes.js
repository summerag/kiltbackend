const express = require('express')
const router = express.Router()
const playerController = require('../controllers/player')

//PLAYER ROUTES
//================================

// //GET ALL PLAYERS
router.get('/players', playerController.getPlayersAll );

// //GET SPECIFIC PLAYER
// router.get('/players/:id');

//POST PLAYERS
router.post('/players', playerController.postAddPlayer)

//TEAM ROUTES
//================================

// //GET ALL TEAMS
// router.get('/teams')
// //GET SPECIFIC TEAM
// router.get('/teams:id')

// //SCHEDULE ROUTES
// //================================

// //GET SCHEDULES
// router.get('/schedule')

module.exports = router;