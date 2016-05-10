var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('../Button/Index.jsx');

var Component = React.createClass({
  getInitialState: function () {
    return {
      selected: ''
    }
  },

  render: function () {
    return (
      <div className="row">
        <label style={Style.label}>
          <h3 style={{margin:"10px"}}>{this.props.label}</h3>
        </label>
        <div className="row">
          {this.getOptions()}
        </div>
      </div>
    )
  },

  getOptions: function () {
    var className;
    if (this.props.options.length == 1) {
      className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
    } else if (this.props.options.length == 2) {
      className = "col-lg-6 col-md-6 col-sm-6 col-xs-12";
    } else if (this.props.options.length == 3) {
      className = "col-lg-4 col-md-4 col-sm-6 col-xs-12";
    } else {
      className = "col-lg-3 col-md-3 col-sm-6 col-xs-12";
    }

    return this.props.options.map(function (option) {
      var onClick = function () {
        this.setState({
          selected: option
        });
      }.bind(this)

      var isSelected = false;
      if (this.state.selected == option) {
        isSelected = true;
      }

      return (
        <Button
          key={option}
          className={className}
          onClick={onClick}
          isSelected={isSelected}
          label={option} />
      )
    }.bind(this));
  },
});

module.exports = Component;