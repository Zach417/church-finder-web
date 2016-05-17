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
            value={this.props.question.name}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Religion"} />
          <Select
            attribute={"religion"}
            value={this.props.question.religion}
            options={["Christianity","Judaism","Islam"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Category"} />
          <Select
            attribute={"category"}
            value={this.props.question.category}
            options={["Doctrine","Liturgy","Culture"]}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (key, value) {
    var question = this.props.question;
    question[key] = value;
    this.props.onChange(question);
  },
});

module.exports = Component;
