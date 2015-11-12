var User = require('./testdb.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite://test.sqlite');

User
  .sync()
  .then(function () {
    User.create({
      firstName: '123',
      lastName: 'bar',
      password: 'asdfasdf',
      numberOfPets: 0
    });
  })
  .then(function (e) {
    console.log('Something went wrong!', e)
  });

exports.User = User;