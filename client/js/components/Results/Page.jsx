var React = require('react');
var Style = require('./Style.jsx');
var Churches = require('./Index.jsx');

var Page = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },

  render: function () {
    return (
      <div style={Style.pageContainer}
        className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered">
        <Churches />
      </div>
    )
  },
});

module.exports = Page;
