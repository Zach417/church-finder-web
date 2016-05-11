var React = require('react');
var Style = require('../Style.jsx');
var Question = require('../Question/Index.jsx');
var QuestionStore = require('../../../stores/QuestionStore');

var Component = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
    }
  },

  componentWillMount: function () {
    QuestionStore.get(function (questions) {
      var result = [];
      questions.map(function (question) {
        if (question.religion === "Christian" && question.category === "Culture") {
          result.push(question);
        }
      });
      this.setState({
        questions: result,
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Culture and Politics"}</h1>
        {this.getQuestions()}
      </div>
    )
  },

  getQuestions: function () {
    return this.state.questions.map(function (question) {
      return (
        <Question
          key={question._id}
          question={question}
          onSelect={this.handleSelect_Question} />
      )
    }.bind(this));
  },

  handleSelect_Question: function (question) {
    if (this.state.questions[this.state.questions.length - 1]._id === question._id) {
      this.props.next();
    }
  },
});

module.exports = Component;
