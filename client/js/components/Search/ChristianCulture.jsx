var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');
var UserStore = require('../../stores').users;

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
    UserStore.get(function (users) {
      var user = users[0];
      var changed = false;
      
      user.questions.map(function (item, i) {
        if (item.name === "The church should weigh in on political debates.") {
          user.questions[i].answer = option;
          changed = true;
        }
      });

      if (changed === false) {
        user.questions.push({
          name: "The church should weigh in on political debates.",
          answer: option,
        });
      }

      UserStore.update(user, function () {
      });
    });
    this.answers.culture1 = option;
    this.setState(this.answers);
    this.props.next();
  },
});

module.exports = Component;
