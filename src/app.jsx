var React = require('react');

var NavBar = require('./navbar');


var element = React.createElement(NavBar, {});
React.render(element, document.querySelector('.container'));
