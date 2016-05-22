var React = require('react');
var Link = require('react-router').Link;
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
    var line1 = "";

    var match = "Poor Compatibility";
    if (this.props.church.questions < 3) {
      match = "Compatibility Not Available";
    } else if (this.props.church.match > .75) {
      match = "Strong Compatibility";
    } else if (this.props.church.match > .5) {
      match = "Good Compatibility";
    }

		return (
				<div
          style={Style.listItem}
          className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 style={{margin:"5px 0",color:"#c36b74"}}>
              <Link to={"/church/" + this.props.church._id}>
                {this.props.church.name}
              </Link>
            </h3>
            <p style={{margin:"0px"}}>
              {match}
              <span>{" • "}</span>
              <a
                target="_blank"
                href={"https://en.wikipedia.org/wiki/" + this.props.church.religion}>
                {this.props.church.religion}
              </a>
              <span>{", "}</span>
              <a
                target="_blank"
                href={"https://en.wikipedia.org/wiki/" + this.props.church.classification}>
                {this.props.church.classification}
              </a>
            </p>
            {this.getAddress()}
            <p />
          </div>
        </div>
		);
	},

  getAddress: function () {
    var church = this.props.church;
    if (!church.addressLine1 || !church.city|| !church.state) {
      return;
    }

    return (
      <p style={{margin:"0px"}}>
        {this.props.church.addressLine1}
        {", "} {this.props.church.city}
        {", "} {this.props.church.state}
      </p>
    )
  },
});

module.exports = ListItem;
