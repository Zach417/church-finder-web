var React = require('react');
var Style = require('./Style.jsx');

var Component = React.createClass({
  getInitialState: function () {
    return {
      hovered: false,
    }
  },

  render: function () {
    if (this.state.hovered) {
      return (
        <div
          className={this.props.className}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <span style={Style.buttonHover}>
            <h3 style={Style.buttonText}>
              {this.props.label}
            </h3>
          </span>
        </div>
      )
    }

    return (
      <div
        className={this.props.className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <span style={Style.button}>
          <h3 style={Style.buttonText}>
            {this.props.label}
          </h3>
        </span>
      </div>
    )
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
