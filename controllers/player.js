const Player = require('../models/player')

exports.getPlayersAll = (req, res, next) => {
    Player.findAll().then(players => {
        res.json(players)
    })
    .catch( err =>{
        console.log(err)
    })
}

exports.postAddPlayer = (req, res, next) => {
    const lolname = req.body.lolname;
    const discordtag = req.body.discordtag;
    const team = req.body.team;
    Player.create({
        lolname: lolname,
        discordtag: discordtag,
        team: team
    })
    .then(player => {
        console.log(player);
        res.json(player);
        
    })
    .catch(err => {
        console.log(err)
    })
}   

