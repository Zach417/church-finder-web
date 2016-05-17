var React = require('react');
var Link = require('react-router').Link;
var Style = require('./Style.jsx');
var Question = require('./Index.jsx');
var QuestionStore = require('../../stores/question');

var Page = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },

  render: function () {
    return (
      <div style={Style.pageContainer}
        className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered">
        <Question id={this.props.params.id} />
      </div>
    )
  },
});

module.exports = Page;
