var React = require('react');
var Style = require('./Style.jsx');
var DenominationStore = require('../../stores/denomination');
var Select = require('../Form/Index.jsx').Select;

var Component = React.createClass({
  getInitialState: function () {
    return {
      denominations: []
    }
  },

  componentWillMount: function () {
    DenominationStore.get(function (denominations) {
      this.setState({
        denominations: denominations,
      });
    }.bind(this))
  },

  render: function () {
    return (
      <Select
        attribute={"denomination"}
        value={this.props.church.denomination}
        options={this.getOptions()}
        onChange={this.props.onChange} />
    )
  },

  getOptions: function () {
    var result = [];
    this.state.denominations.map(function (denomination) {
      result.push({
        label: denomination.name,
        value: denomination._id
      });
    });
    return result;
  },
});

module.exports = Component;
