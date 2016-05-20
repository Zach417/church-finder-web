var React = require('react');
var Link = require('react-router').Link;
var Style = require('./Style.jsx');
var Compatibility = require('./Compatibility.jsx');
var Denomination = require('./Denomination.jsx');
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
    return (
      <div style={Style.componentContainer} className="container-fluid">
        <div style={{marginBottom:"10px"}} className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Link to="/results">
              <h3 style={{margin:"0px"}}>Back to church list</h3>
            </Link>
          </div>
        </div>
        <div style={Style.rowTop} className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 style={{margin:"0px"}}>{this.state.church.name}</h1>
          </div>
        </div>
        <div style={Style.rowMiddle} className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Compatibility church={this.state.church} />
          </div>
        </div>
        <div style={Style.rowBottom} className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 style={{margin:"0px"}}>About</h3>
            <div>
              {"Classification: "}
              {this.getClassification()}
            </div>
            <div>
              {"Religion: "}
              {this.getReligion()}
            </div>
            <div>
              {"Denomination: "}
              <Denomination id={this.state.church.denomination} />
            </div>
            <div>
              {"Website: "}
              {this.getWebsite()}
            </div>
            <div>
              {"Facebook Page: "}
              {this.getFacebookPage()}
            </div>
            <div>
              {"Phone: "}
              {this.getPhone()}
            </div>
            <div>
              {"Address: "}
              {this.getAddress()}
            </div>
          </div>
        </div>
      </div>
    )
  },

  getClassification: function () {
    if (!this.state.church.classification) { return }
    return (
      <a
        target="_blank"
        href={"https://en.wikipedia.org/wiki/" + this.state.church.classification}>
        {this.state.church.classification}
      </a>
    )
  },

  getReligion: function () {
    if (!this.state.church.religion) { return }
    return (
      <a
        target="_blank"
        href={"https://en.wikipedia.org/wiki/" + this.state.church.religion}>
        {this.state.church.religion}
      </a>
    )
  },

  getWebsite: function () {
    if (!this.state.church.website) { return }
    return (
      <a
        target="_blank"
        href={this.state.church.website}>
        {this.state.church.website}
      </a>
    )
  },

  getFacebookPage: function () {
    if (!this.state.church.facebookPage) { return }
    return (
      <a
        target="_blank"
        href={this.state.church.facebookPage}>
        {this.state.church.facebookPage}
      </a>
    )
  },

  getPhone: function () {
    if (!this.state.church.phone) { return }
    return (
      <a
        href={"tel:" + this.state.church.phone}>
        {this.state.church.phone}
      </a>
    )
  },

  getAddress: function () {
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

    return (
      <a
        target="_blank"
        href={"https://www.google.com/maps/place/" + address}>
        {address}
      </a>
    )
  },
});

module.exports = Component;
