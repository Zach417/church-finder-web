var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Info = require('./Info.jsx');
var Label = require('../Form/Index.jsx').Label;
var Input = require('../Form/Index.jsx').Input;
var ButtonPrimary = require('../Button/Index.jsx').Primary;
var ButtonSecondary = require('../Button/Index.jsx').Secondary;
var ButtonDanger = require('../Button/Index.jsx').Danger;
var QuestionStore = require('../../stores/question');
var QuestionActions = require('../../actions/question');

var Component = React.createClass({
  getInitialState: function () {
    return {
      question: {}
    }
  },

  componentWillMount: function () {
    if (this.props.id && this.props.id != "create") {
      QuestionStore.getOne(this.props.id, function (doc) {
        this.setState({
          question: doc
        });
      }.bind(this));
    }
  },

  render: function () {
    return (
      <div style={Style.componentContainer} className="container-fluid">
        <div className="row">
          <h1 style={{margin:"0px 0px 20px 0px"}}>{this.state.question.name}</h1>
        </div>
        <Info
          question={this.state.question}
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

  handleChange_SubComponent: function (question) {
    this.setState({
      question: question,
    });
  },

  handleClick_Submit: function () {
    if (this.state.question._id) {
      QuestionActions.update(this.state.question);
      browserHistory.push("/admin/question");
    } else {
      QuestionActions.create(this.state.question);
      browserHistory.push("/admin/question");
    }
  },

  handleClick_Cancel: function () {
    browserHistory.push("/admin/question");
  },

  handleClick_Delete: function () {
    QuestionActions.destroy(this.state.question);
    browserHistory.push("/admin/question");
  },
});

module.exports = Component;
