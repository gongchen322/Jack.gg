var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite://jackgg.sqlite');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
 
var User = sequelize.define(
  'User',
  {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    SummonerID: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  }
); 


var Game = sequelize.define(
  'Game',
  {
    SummonerID: { type: Sequelize.STRING },
    SummonerName: { type: Sequelize.STRING },
    kill: { type: Sequelize.INTEGER },
    death: { type: Sequelize.INTEGER },
    assist: { type: Sequelize.INTEGER },
    gold: { type: Sequelize.INTEGER },
    damage: { type: Sequelize.INTEGER },
    time: { type: Sequelize.STRING },
    gametype: { type: Sequelize.STRING },
    SummonerID: { type: Sequelize.STRING },
    SummonerName: { type: Sequelize.STRING }
  }
);


/*
  function saveGame(obj){
    var game = Game.build({
    SummonerID: obj. ,
    SummonerName: obj. ,
    kill: obj. ,
    death: obj. ,
    assist: obj. ,
    gold: obj. ,
    damage: obj. ,
    time: obj. ,
    gametype: obj. ,
    SummonerID: obj. ,
    SummonerName: obj. ,
  });
  */
exports.User = User;
exports.Game = Game;