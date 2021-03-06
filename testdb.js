var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite://test.sqlite');


var User = sequelize.define(
  'User',
  {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    numberOfPets: { type: Sequelize.INTEGER }
  }
);

User
  .sync()
  .then(function () {
    User.create({
      firstName: 'foo',
      lastName: 'bar',
      password: 'asdfasdf',
      numberOfPets: 0
    });
  })
  .then(function (e) {
    console.log('Something went wrong!', e)
  });

exports.User = User;