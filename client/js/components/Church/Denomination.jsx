var React = require('react');
var Style = require('./Style.jsx');
var DenominationStore = require('../../stores/denomination');

var Component = React.createClass({
  getInitialState: function () {
    return {
      denomination: '',
    }
  },

  componentWillMount: function () {
    DenominationStore.getOne(this.props.id, function (doc) {
      this.setState({
        denomination: doc,
      });
    }.bind(this));
  },

  componentWillReceiveProps: function (newProps) {
    DenominationStore.getOne(newProps.id, function (doc) {
      this.setState({
        denomination: doc,
      });
    }.bind(this));
  },

  render: function () {
    return (
      <a
        target="_blank"
        href={"https://en.wikipedia.org/wiki/" + this.state.denomination.name}>
        {this.state.denomination.name}
      </a>
    )
  },
});

module.exports = Component;
