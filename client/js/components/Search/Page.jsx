var React = require('react');
var Style = require('./Style.jsx');
var SearchComponent = require('./Index.jsx');

var Component = React.createClass({
  componentDidMount: function () {
    window.scrollTo(0,0);
  },

  render: function() {
    return (
      <div className="container-fluid" style={Style.container}>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-centered">
            <SearchComponent />
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Component;
