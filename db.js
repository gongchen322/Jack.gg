var Sequelize = require('sequelize');

var sequelize = new Sequelize('usrpwd', 'dbuser', 'dbpassword', {
  host: 'localhost', //mysql host name
  port: 3306 //default mysql port
});

var User = sequelize.define(
  'User',
  {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  }
);

var Game = sequelize.define(
  'User',
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
    SummonerName: { type: Sequelize.STRING },
  }
);