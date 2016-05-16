var React = require('react');
var Style = require('./Style.jsx');
var Label = require('../Form/Index.jsx').Label;
var Select = require('../Form/Index.jsx').Select;
var ButtonDanger = require('../Button/Index.jsx').Danger;
var QuestionStore = require('../../stores/question');

var Component = React.createClass({
  getInitialState: function () {
    return {
      question: '',
      questions: [],
    }
  },

  componentWillMount: function () {
    var id = this.props.question.questionId;
    QuestionStore.get(function (questions) {
      var question = questions.find(function (question) {
        return question._id == this.props.question.questionId;
      }.bind(this));
      this.setState({
        question: question,
        questions: questions,
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Label label={"Question"} />
          <Select
            attribute={"questionId"}
            value={this.props.question.questionId}
            options={this.getQuestionsOptions()}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Label label={"Answer"} />
          <Select
            attribute={"answer"}
            value={this.props.question.answer}
            options={["Agree","Disagree","Not sure"]}
            onChange={this.handleChange_Attribute} />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ButtonDanger
            label={"Delete"}
            onClick={this.handleClick_Delete} />
        </div>
      </div>
    )
  },

  getQuestionsOptions: function () {
    var result = [];
    this.state.questions.map(function (question) {
      result.push({
        value: question._id,
        label: question.name,
      })
    });
    return result;
  },

  handleChange_Attribute: function (attribute, value) {
    var questions = this.props.denomination.questions;
    questions[this.props.index][attribute] = value;
    this.props.onChange(questions);
  },

  handleClick_Delete: function () {
    var questions = this.props.denomination.questions;
    questions.splice(this.props.index,1);
    this.props.onChange(questions);
  },
});

module.exports = Component;
