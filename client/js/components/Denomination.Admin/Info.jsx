var React = require('react');
var Style = require('./Style.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var Select = require('../Form/Index.jsx').Select;

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.subComponentContainer} className="row">
        <h3 style={{margin:"0"}}>Info</h3>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Name"} />
          <Input
            type={"text"}
            attribute={"name"}
            value={this.props.denomination.name}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Website"} />
          <Input
            type={"text"}
            attribute={"website"}
            value={this.props.denomination.website}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Phone"} />
          <Input
            type={"text"}
            attribute={"phone"}
            value={this.props.denomination.phone}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Email"} />
          <Input
            type={"text"}
            attribute={"email"}
            value={this.props.denomination.email}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Facebook URL"} />
          <Input
            type={"text"}
            attribute={"facebookPage"}
            value={this.props.denomination.facebookPage}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Religion"} />
          <Select
            type={"text"}
            attribute={"religion"}
            value={this.props.denomination.religion}
            options={["Christianity","Judaism","Islam"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Classification"} />
          <Select
            type={"text"}
            attribute={"classification"}
            value={this.props.denomination.classification}
            options={["Roman Catholicism","Protestantism","Eastern Orthodoxy","Angelicanism","Oriental Orthodoxy","Nestorianism","Other"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Origin Year"} />
          <Input
            type={"text"}
            attribute={"originYear"}
            value={this.props.denomination.originYear}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Origin City"} />
          <Input
            type={"text"}
            attribute={"originCity"}
            value={this.props.denomination.originCity}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Origin State"} />
          <Input
            type={"text"}
            attribute={"originState"}
            value={this.props.denomination.originState}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"# of congregations"} />
          <Input
            type={"text"}
            attribute={"congregations"}
            value={this.props.denomination.congregations}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"# of members"} />
          <Input
            type={"text"}
            attribute={"members"}
            value={this.props.denomination.members}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (key, value) {
    var denomination = this.props.denomination;
    denomination[key] = value;
    this.props.onChange(denomination);
  },
});

module.exports = Component;
