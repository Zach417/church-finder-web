var React = require('react');
var Style = require('./Style.jsx');

var Component = React.createClass({
  getInitialState: function () {
    return {
      hovered: false,
    }
  },

  render: function () {
    if (this.props.isSelected) {
      return (
        <div
          className={this.props.className}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <span style={Style.containerSelected}>
            <h3 style={Style.label}>
              {this.props.label}
            </h3>
          </span>
        </div>
      )
    }

    if (this.state.hovered) {
      return (
        <div
          className={this.props.className}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <span style={Style.containerHovered}>
            <h3 style={Style.label}>
              {this.props.label}
            </h3>
          </span>
        </div>
      )
    }

    return (
      <div
        className={this.props.className}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <span style={Style.container}>
          <h3 style={Style.label}>
            {this.props.label}
          </h3>
        </span>
      </div>
    )
  },

  handleClick: function () {
    this.props.onClick(this.props.label);
  },

  handleMouseEnter: function () {
    this.setState({
      hovered: true,
    });
  },

  handleMouseLeave: function () {
    this.setState({
      hovered: false,
    });
  },
});

module.exports = Component;
