var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  getInitialState: function () {
    this.answers = {
      culture1: '',
    };
    return this.answers;
  },

  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Culture and Politics"}</h1>
        <Question
          label={"The church should weigh in on political debates."}
          options={["Agree","Not sure","Disagree"]}
          onSelect={this.handleSelect_Culture1} />
      </div>
    )
  },

  handleSelect_Culture1: function (option) {
    this.answers.culture1 = option;
    this.setState(this.answers);
    this.props.next();
  },
});

module.exports = Component;
