var React = require('react');
var $ = require('jquery');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');

var ListItem = React.createClass({
  getInitialState: function () {
    return {
      isHovered: ''
    }
  },

  componentWillMount: function () {
    this.setState({
      isHovered: false,
    });
  },

	render: function () {
    var style = Style.listItem;
    if (this.state.isHovered) {
      style = Style.listItemHover;
    }

    var detail = "";
    if (this.props.denomination.contact.name) {
      detail = "Primary contact: "
        + this.props.denomination.contact.name + ", "
        + this.props.denomination.contact.email;
    } else if (this.props.denomination.email) {
      detail = "Email: " + this.props.denomination.email;
    }

		return (
				<div
          style={style}
          onClick={this.handleClick_Li}
          onMouseEnter={this.handleMouseEnter_Li}
          onMouseLeave={this.handleMouseLeave_Li}>
          <h3 style={{margin:"5px 0",color:"#c36b74"}}>{this.props.denomination.name}</h3>
          <p>{detail}</p>
        </div>
		);
	},

  handleClick_Li: function () {
    browserHistory.push("/admin/denomination/" + this.props.denomination._id);
  },

  handleMouseEnter_Li: function () {
    this.setState({
      isHovered: true,
    });
  },

  handleMouseLeave_Li: function () {
    this.setState({
      isHovered: false,
    });
  },
});

module.exports = ListItem;
