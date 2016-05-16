var React = require('react');
var Style = require('./Style.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.subComponentContainer} className="row">
        <h3 style={{margin:"0"}}>Primary Contact</h3>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Name"} />
          <Input
            type={"text"}
            attribute={"name"}
            value={this.props.church.contact.name}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Title"} />
          <Input
            type={"text"}
            attribute={"title"}
            value={this.props.church.contact.title}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Phone"} />
          <Input
            type={"text"}
            attribute={"phone"}
            value={this.props.church.contact.phone}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Email"} />
          <Input
            type={"text"}
            attribute={"email"}
            value={this.props.church.contact.email}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (key, value) {
    var church = this.props.church;
    church.contact[key] = value;
    this.props.onChange(church);
  },
});

module.exports = Component;
