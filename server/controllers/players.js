// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Player = mongoose.model('Player'); // change as needed

module.exports = {
    getAllPlayers : (request, response) =>{
        Player.find({}, function(error, players) {
            if (error) {
                console.log(error);
                response.json(error);
            } else {
                console.log('***** found all Players')
                response.json(players);
            }
        });
    },

    addAPlayer : (request, response) => {
        console.log('***** hit addAPlayer');
        let player = new Player(request.body);
        player.save((error, player) => {
            if (error) {
                console.log(error);
                response.json(error);
            } else {
                console.log('***** player added successfully')
                response.json(player);
            }
        });
    },

    removeAPlayer : (request, response) => {
        console.log('***** hit removeAPlayer');
        console.log(request.body);
        Player.remove({_id: request.body.id}, (error)=>{
            console.log('***** hit Playerremoved');
            console.log(error);
            response.json(true);
        });

    },

    updateGame1Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game1Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },
    updateGame2Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game2Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },
    updateGame3Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game3Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },

}