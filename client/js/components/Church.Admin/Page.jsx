var React = require('react');
var Link = require('react-router').Link;
var Style = require('./Style.jsx');
var Church = require('./Index.jsx');
var ChurchStore = require('../../stores/church');

var Page = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },

  render: function () {
    return (
      <div style={Style.pageContainer}
        className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered">
        <Church id={this.props.params.id} />
      </div>
    )
  },
});

module.exports = Page;
