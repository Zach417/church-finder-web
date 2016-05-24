var React = require('react');
var Style = require('./Style.jsx');
var DenominationSearch = require('./DenominationSearch.jsx');
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
            value={this.props.church.name}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Website"} />
          <Input
            type={"text"}
            attribute={"website"}
            value={this.props.church.website}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Phone"} />
          <Input
            type={"text"}
            attribute={"phone"}
            value={this.props.church.phone}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Email"} />
          <Input
            type={"text"}
            attribute={"email"}
            value={this.props.church.email}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Facebook URL"} />
          <Input
            type={"text"}
            attribute={"facebookPage"}
            value={this.props.church.facebookPage}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Religion"} />
          <Select
            type={"text"}
            attribute={"religion"}
            value={this.props.church.religion}
            options={["Christianity","Judaism","Islam"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Classification"} />
          <Select
            type={"text"}
            attribute={"classification"}
            value={this.props.church.classification}
            options={["Roman Catholicism","Protestantism","Eastern Orthodoxy","Anglicanism","Oriental Orthodoxy","Nestorianism","Catholicism","Other"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Origin Year"} />
          <Input
            type={"text"}
            attribute={"originYear"}
            value={this.props.church.originYear}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"# of members"} />
          <Input
            type={"text"}
            attribute={"members"}
            value={this.props.church.members}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Denomination"} />
          <DenominationSearch
            church={this.props.church}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (key, value) {
    var church = this.props.church;
    church[key] = value;
    this.props.onChange(church);
  },
});

module.exports = Component;
