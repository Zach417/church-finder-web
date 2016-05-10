var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  getInitialState: function () {
    this.answers = {
      bible: '',
      leadership: '',
      homosexuality: '',
    };
    return this.answers;
  },

  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Doctrine"}</h1>
        <Question
          label={"The bible is..."}
          options={["The only source of truth","A source of truth","Not important"]}
          onSelect={this.handleSelect_Bible} />
        <Question
          label={"Churches should be ran by..."}
          options={["Men only","Anyone"]}
          onSelect={this.handleSelect_Leadership} />
        <Question
          label={"Homosexuality is..."}
          options={["Sinful and immoral","Not sinful nor immoral","Not sure"]}
          onSelect={this.handleSelect_Homosexuality} />
      </div>
    )
  },

  handleSelect_Bible: function (option) {
    this.answers.bible = option;
    this.setState(this.answers);
  },

  handleSelect_Leadership: function (option) {
    this.answers.leadership = option;
    this.setState(this.answers);
  },

  handleSelect_Homosexuality: function (option) {
    this.answers.homosexuality = option;
    this.setState(this.answers);
    if (this.answers.bible && this.answers.leadership && this.answers.homosexuality) {
      this.props.next();
    }
  },
});

module.exports = Component;
