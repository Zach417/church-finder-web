var React = require('react');
var Style = require('./Style.jsx');
var SearchComponent = require('./Index.jsx');

var Component = React.createClass({
  componentDidMount: function () {
    window.scrollTo(0,0);
  },

  render: function() {
    return (
      <div style={Style.container} className="container-fluid">
        <SearchComponent />
      </div>
    );
  },
});

module.exports = Component;
