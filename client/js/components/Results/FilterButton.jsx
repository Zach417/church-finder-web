var React = require('react');
var Style = require('./Style.jsx');

var Component = React.createClass({
  getInitialState: function () {
    return {
      status: ''
    }
  },

  render: function () {
    var style = Style.filterButton;
    if (this.state.status === 'pressed') {
      style = Style.filterButtonPressed;
    } else if (this.state.status === 'hovered') {
      style = Style.filterButtonHovered;
    }

    return (
      <div
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>
        {this.props.label}
      </div>
    )
  },

  handleMouseEnter: function () {
    if (this.state.status !== 'pressed') {
      this.setState({status:'hovered'});
    }
  },

  handleMouseLeave: function () {
    if (this.state.status !== 'pressed') {
      this.setState({status:''});
    }
  },

  handleClick: function () {
    if (this.state.status === 'pressed') {
      this.setState({status:''});
      this.props.onClick('removed');
    } else {
      this.setState({status:'pressed'});
      this.props.onClick('pressed');
    }
  },
});

module.exports = Component;
