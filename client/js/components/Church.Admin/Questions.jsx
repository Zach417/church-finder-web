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
    return this.props.church.questions.map(function (question, i) {
      var handleChange = function (questions) {
        var church = this.props.church;
        church.questions = questions;
        this.props.onChange(church);
      }.bind(this)

      return (
        <Question
          key={i}
          question={question}
          church={this.props.church}
          index={i}
          onChange={handleChange} />
      )
    }.bind(this));
  },

  handleClick_AddQuestion: function () {
    var church = this.props.church;
    church.questions.push({});
    this.props.onChange(church);
  },
});

module.exports = Component;
