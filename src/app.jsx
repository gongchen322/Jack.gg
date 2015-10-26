var React = require('react');

var Hello = React.createClass({
  render: function() {

    return <body>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a id="a" className="navbar-brand" href="#">Jack.gg</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Page 1-1</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>
              <li><a href="rune.html">Check Rune</a></li>
              <li><a href="map.html">Map</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div> 
      </nav>
    </div>
  </body>
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
