var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Culture and Politics"}</h1>
        <Question
          label={"The church should weigh in on political debates."}
          options={["Agree","Not sure","Disagree"]} />
      </div>
    )
  },
});

module.exports = Component;
