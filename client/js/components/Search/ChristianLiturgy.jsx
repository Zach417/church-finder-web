var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('./Button/Index.jsx');
var Question = require('./Question/Index.jsx');

var Component = React.createClass({
  getInitialState: function () {
    this.answers = {
      worship1: '',
      worship2: '',
    };
    return this.answers;
  },

  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <h1>{"Liturgy"}</h1>
        <Question
          label={"Worship should be..."}
          options={["On fire and lively","Conservative and reverent","Somewhere in the middle"]}
          onSelect={this.handleSelect_Worship1} />
        <Question
          label={"My ideal worship service is..."}
          options={["Orthodox and traditional","Contemporary and energetic","Simple and reserved"]}
          onSelect={this.handleSelect_Worship2} />
      </div>
    )
  },

  handleSelect_Worship1: function (option) {
    this.answers.worship1 = option;
    this.setState(this.answers);
  },

  handleSelect_Worship2: function (option) {
    this.answers.worship2 = option;
    this.setState(this.answers);
    if (this.answers.worship1 && this.answers.worship2) {
      this.props.next();
    }
  },
});

module.exports = Component;
