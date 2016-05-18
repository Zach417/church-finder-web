var React = require('react');
var Style = require('./Style.jsx');
var Admin = require('./Admin.jsx');
var Compatibility = require('./Compatibility.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var ChurchStore = require('../../stores/church');
var SearchService = require('../../services/MethodInterface').search;

function resolveSubDocuments (church) {
  if (!church) { church = {} }
  if (!church.contact) { church.contact = {} }
  if (!church.questions) { church.questions = [] }
  return church;
}

var Component = React.createClass({
  getInitialState: function () {
    return {
      church: resolveSubDocuments({})
    }
  },

  componentWillMount: function () {
    if (this.props.id) {
      SearchService.executeOne(this.props.id, function (doc) {
        this.setState({
          church: resolveSubDocuments(doc)
        });
      }.bind(this));
    }
  },

  render: function () {
    var address = "";
    if (this.state.church.addressLine1 && this.state.church.addressLine2) {
      address = this.state.church.addressLine1 + " " + this.state.church.addressLine2;
    } else {
      address = this.state.church.addressLine1;
    }
    address = address
      + ", " + this.state.church.city
      + ", " + this.state.church.state
      + " " + this.state.church.zip;

    var match = "Poor Compatibility";
    if (this.state.church.match > .75) {
      match = "Strong Compatibility";
    } else if (this.state.church.match > .5) {
      match = "Good Compatibility";
    }

    return (
      <div style={Style.componentContainer} className="container-fluid">
        <div className="row">
          <h1 style={{margin:"0px"}}>{this.state.church.name}</h1>
          <h4 style={{margin:"0px"}}>
            {match}
            {" • "}
            <a
              target="_blank"
              href={"https://en.wikipedia.org/wiki/" + this.state.church.classification}>
              {this.state.church.classification}
            </a>
            {" • "}
            <a
              target="_blank"
              href={"https://www.google.com/maps/place/"
                + this.state.church.city + ", " + this.state.church.state}>
              {this.state.church.city}
              {", "}
              {this.state.church.state}
            </a>
          </h4>
          <h4 style={{margin:"0px"}}>
            <a
              target="_blank"
              href={"https://www.google.com/maps/place/" + address}>
              {address.split(",")[0]}
              <br/>
              {address.split(",")[1]}
              {", "}
              {address.split(",")[2]}
            </a>
          </h4>
        </div>
        <Compatibility church={this.state.church} />
      </div>
    )
  },
});

module.exports = Component;
