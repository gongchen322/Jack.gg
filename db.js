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

User.sync();

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



sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

 User = User.create({
    firstName: 'foo',
    lastName: 'bar',
    SummonerID: 'aa',
    password: 'aa',
    email: 'aa'
  });
 
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