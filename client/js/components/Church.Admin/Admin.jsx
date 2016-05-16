var React = require('react');
var Style = require('./Style.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var Select = require('../Form/Index.jsx').Select;

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.subComponentContainer} className="row">
        <h3 style={{margin:"0"}}>Administration</h3>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={Style.detailColumn}>
          <Label label={"Is Active"} />
          <Select
            attribute={"isActive"}
            value={this.props.church.isActive}
            options={[{value:true,label:"Yes"},{value:false,label:"No"}]}
            onChange={this.handleChange_Attribute} />
        </div>
      </div>
    )
  },

  handleChange_Attribute: function (attribute, value) {
    var church = this.props.church;
    if (attribute == "isActive" && value != "") {
      church[attribute] = JSON.parse(value);
    } else {
      church[attribute] = value;
    }
    this.props.onChange(church);
  },
});

module.exports = Component;
