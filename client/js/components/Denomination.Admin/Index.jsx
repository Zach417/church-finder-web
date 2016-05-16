var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Info = require('./Info.jsx');
var Contact = require('./Contact.jsx');
var Address = require('./Address.jsx');
var Questions = require('./Questions.jsx');
var Admin = require('./Admin.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var ButtonPrimary = require('../Button/Index.jsx').Primary;
var ButtonSecondary = require('../Button/Index.jsx').Secondary;
var ButtonDanger = require('../Button/Index.jsx').Danger;
var DenominationStore = require('../../stores/denomination');
var DenominationActions = require('../../actions/denomination');

function resolveSubDocuments (denomination) {
  if (!denomination) { denomination = {} }
  if (!denomination.contact) { denomination.contact = {} }
  if (!denomination.questions) { denomination.questions = [] }
  return denomination;
}

var Component = React.createClass({
  getInitialState: function () {
    return {
      denomination: resolveSubDocuments({})
    }
  },

  componentWillMount: function () {
    if (this.props.id && this.props.id != "create") {
      DenominationStore.getOne(this.props.id, function (doc) {
        this.setState({
          denomination: resolveSubDocuments(doc)
        });
      }.bind(this));
    }
  },

  render: function () {
    return (
      <div style={Style.componentContainer} className="container-fluid">
        <div className="row">
          <h1 style={{margin:"0px 0px 20px 0px"}}>{this.state.denomination.name}</h1>
        </div>
        <Info
          denomination={this.state.denomination}
          onChange={this.handleChange_SubComponent} />
        <Address
          denomination={this.state.denomination}
          onChange={this.handleChange_SubComponent} />
        <Contact
          denomination={this.state.denomination}
          onChange={this.handleChange_SubComponent} />
        <Admin
          denomination={this.state.denomination}
          onChange={this.handleChange_SubComponent} />
        <Questions
          denomination={this.state.denomination}
          onChange={this.handleChange_SubComponent} />
        <div style={Style.subComponentContainer} className="row">
          <ButtonPrimary label={"Save"} onClick={this.handleClick_Submit} />
          <span style={{display:"inline-block",width:"5px"}} />
          <ButtonSecondary label={"Cancel"} onClick={this.handleClick_Cancel} />
          <span style={{display:"inline-block",width:"5px"}} />
          <ButtonDanger label={"Delete"} onClick={this.handleClick_Delete} />
        </div>
      </div>
    )
  },

  handleChange_SubComponent: function (denomination) {
    this.setState({
      denomination: resolveSubDocuments(denomination),
    });
  },

  handleClick_Submit: function () {
    if (this.state.denomination._id) {
      DenominationActions.update(this.state.denomination);
      browserHistory.push("/admin/denomination");
    } else {
      DenominationActions.create(this.state.denomination);
      browserHistory.push("/admin/denomination");
    }
  },

  handleClick_Cancel: function () {
    browserHistory.push("/admin/denomination");
  },

  handleClick_Delete: function () {
    DenominationActions.destroy(this.state.denomination);
    browserHistory.push("/admin/denomination");
  },
});

module.exports = Component;
