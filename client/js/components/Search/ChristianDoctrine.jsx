var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Doctrine"}</h1>
        <Question
          label={"The bible is..."}
          options={["The only source of truth","A source of truth","Not important"]} />
        <Question
          label={"Churches should be ran by..."}
          options={["Men only","Anyone"]} />
        <Question
          label={"Homosexuality is..."}
          options={["Sinful and immoral","Not sinful nor immoral","Not sure"]} />
      </div>
    )
  },
});

module.exports = Component;
