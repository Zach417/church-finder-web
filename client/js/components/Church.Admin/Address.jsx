var React = require('react');
var Style = require('./Style.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;

var Component = React.createClass({
  componentWillMount: function () {
    this.church = this.props.church;
  },

  render: function () {
    return (
      <div style={Style.subComponentContainer} className="row">
        <h3 style={{margin:"0"}}>Address</h3>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Line 1"} />
          <Input
            type={"text"}
            attribute={"addressLine1"}
            value={this.props.church.addressLine1}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Line 2"} />
          <Input
            type={"text"}
            attribute={"addressLine2"}
            value={this.props.church.addressLine2}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"City"} />
          <Input
            type={"text"}
            attribute={"city"}
            value={this.props.church.city}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"State"} />
          <Input
            type={"text"}
            attribute={"state"}
            value={this.props.church.state}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Zip Code"} />
          <Input
            type={"text"}
            attribute={"zip"}
            value={this.props.church.zip}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (key, value) {
    this.church[key] = value;
    this.props.onChange(this.church);
  },
});

module.exports = Component;
