var React = require('react');

module.exports = React.createClass({
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
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>
              <li><a href="html/rune.html">Check Rune</a></li>
              <li><a href="#">Map</a></li>
              <li><a href="html/collision.html">Collision Detection</a></li>
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