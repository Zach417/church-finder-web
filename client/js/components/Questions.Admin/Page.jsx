var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Questions = require('./Index.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary;
var QuestionStore = require('../../stores/question');

var Page = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      isLoading: true,
    }
  },

  componentWillMount: function () {
    QuestionStore.get(function (docs) {
      this.setState({
        questions: docs,
        isLoading: false,
      });
    }.bind(this));
  },

  componentDidMount: function() {
    window.scrollTo(0, 0);
    QuestionStore.addChangeListener(this.handleChange_QuestionStore);
  },

  componentWillUnmount: function() {
    QuestionStore.removeChangeListener(this.handleChange_QuestionStore);
  },

  render: function () {
    if (this.state.isLoading === true) {
      return (
        <div style={Style.pageContainer}>
    			<div className="row-fluid" style={Style.jumbotron} onClick={this.handleClick_AddQuestion}>
    				<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered"
              style={{padding:"0"}}>
              <img src="/img/wait" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div style={Style.pageContainer}
          className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered">
          <Questions />
        </div>
      )
    }
  },

  handleChange_QuestionStore: function () {
    QuestionStore.get(function (docs) {
      this.setState({
        questions: docs,
        isLoading: false,
      });
    }.bind(this))
  },

  handleClick_AddQuestion: function () {
    browserHistory.push("/question/create");
  },
});

module.exports = Page;
