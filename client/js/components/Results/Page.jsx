var React = require('react');
var Style = require('./Style.jsx');
var Churches = require('./Index.jsx');

var Page = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },

  render: function () {
    return (
      <div style={Style.pageContainer}>
        <Churches />
      </div>
    )
  },
});

module.exports = Page;
