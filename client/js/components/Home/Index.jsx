var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var SearchComponent = require('../Search/Index.jsx');

var Component = React.createClass({
  componentDidMount: function () {
    window.scrollTo(0,0);
  },

  render: function() {
    return (
      <div style={Style.container}>
        <div className="container-fluid" style={Style.jumbotron}>
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered"
            style={{padding:"0"}}>
            <div>
              <SearchComponent />
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Component;
