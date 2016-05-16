var React = require('react');
var Style = require('./Style.jsx');
var Question = require('./Question.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary;

var Component = React.createClass({
  render: function () {
    return (
      <div style={Style.subComponentContainer} className="row">
        <div
          style={{padding:"0px"}}
          className="col-lg-6 col-md-6 col-sm-6 col-xs-8">
          <h3 style={{margin:"0"}}>Questions</h3>
        </div>
        <div
          style={{padding:"0px"}}
          className="col-lg-6 col-md-6 col-sm-6 col-xs-4">
          <div style={{float:"right"}}>
            <ButtonPrimary label={"New"} onClick={this.handleClick_AddQuestion} />
          </div>
        </div>
        {this.getQuestions()}
      </div>
    )
  },

  getQuestions: function () {
    return this.props.denomination.questions.map(function (question, i) {
      var handleChange = function (questions) {
        var denomination = this.props.denomination;
        denomination.questions = questions;
        this.props.onChange(denomination);
      }.bind(this)

      return (
        <Question
          key={i}
          question={question}
          denomination={this.props.denomination}
          index={i}
          onChange={handleChange} />
      )
    }.bind(this));
  },

  handleClick_AddQuestion: function () {
    var denomination = this.props.denomination;
    denomination.questions.push({});
    this.props.onChange(denomination);
  },
});

module.exports = Component;
