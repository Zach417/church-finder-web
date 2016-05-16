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
var ChurchStore = require('../../stores/church');
var ChurchActions = require('../../actions/church');

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
    if (this.props.id && this.props.id != "create") {
      ChurchStore.getOne(this.props.id, function (doc) {
        this.setState({
          church: resolveSubDocuments(doc)
        });
      }.bind(this));
    }
  },

  render: function () {
    return (
      <div style={Style.componentContainer} className="container-fluid">
        <div className="row">
          <h1 style={{margin:"0px 0px 20px 0px"}}>{this.state.church.name}</h1>
        </div>
        <Info
          church={this.state.church}
          onChange={this.handleChange_SubComponent} />
        <Address
          church={this.state.church}
          onChange={this.handleChange_SubComponent} />
        <Contact
          church={this.state.church}
          onChange={this.handleChange_SubComponent} />
        <Admin
          church={this.state.church}
          onChange={this.handleChange_SubComponent} />
        <Questions
          church={this.state.church}
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

  handleChange_SubComponent: function (church) {
    this.setState({
      church: resolveSubDocuments(church),
    });
  },

  handleClick_Submit: function () {
    if (this.state.church._id) {
      ChurchActions.update(this.state.church);
      browserHistory.push("/admin/church");
    } else {
      ChurchActions.create(this.state.church);
      browserHistory.push("/admin/church");
    }
  },

  handleClick_Cancel: function () {
    browserHistory.push("/admin/church");
  },

  handleClick_Delete: function () {
    ChurchActions.destroy(this.state.church);
    browserHistory.push("/admin/church");
  },
});

module.exports = Component;
