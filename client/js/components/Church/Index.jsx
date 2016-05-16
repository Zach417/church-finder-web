var React = require('react');
var Style = require('./Style.jsx');
var Admin = require('./Admin.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var ChurchStore = require('../../stores/church');

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
      </div>
    )
  },
});

module.exports = Component;
