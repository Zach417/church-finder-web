var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Liturgy"}</h1>
        <Question
          label={"Worship should be..."}
          options={["On fire and lively","Conservative and reverent","Somewhere in the middle"]} />
        <Question
          label={"My ideal worship service is..."}
          options={["Orthodox and traditional","Contemporary and energetic","Simple and reserved"]} />
      </div>
    )
  },
});

module.exports = Component;
