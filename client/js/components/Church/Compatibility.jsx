var React = require('react');
var Style = require('./Style.jsx');
var UserStore = require('../../stores/user');
var QuestionStore = require('../../stores/question');

function answerToScale (answer) {
  switch (answer) {
    case "Strongly Agree": return 5;
    case "Agree": return 4;
    case "Neutral": return 3;
    case "Disagree": return 2;
    case "Strongly Disagree": return 1;
    default: return 0;
  }
}

var Component = React.createClass({
  getInitialState: function () {
    return {
      user: '',
      questions: '',
    }
  },

  componentWillMount: function () {
    UserStore.get(function (users) {
      QuestionStore.get(function (questions) {
        this.setState({
          user: users[0],
          questions: questions,
        });
      }.bind(this));
    }.bind(this));
  },

  render: function () {
    if (!this.props.church.questions || this.props.church.questions.length < 3) {
      return (
        <div>
          This church has not provided enough information
          in order to estimate your compatibility to the
          organization.
        </div>
      )
    }

    return (
      <div>
        <h3 style={{color:"#094C83",margin:"0px"}}>
          {"Compatibility • "}
          {this.getOverall("strength")}
        </h3>
        <div>
          {this.getOverall("description")}
        </div>
        <div>
          <h4 style={{color:"#094C83",margin:"0px"}}>
            {"Doctrinal Issues • "}
            {this.getDoctrine("strength")}
          </h4>
          <div>
            {this.getDoctrine("description")}
          </div>
        </div>
        <div>
          <h4 style={{color:"#094C83",margin:"0px"}}>
            {"Liturgy and Worship • "}
            {this.getLiturgy("strength")}
          </h4>
          <div>
            {this.getLiturgy("description")}
          </div>
        </div>
        <div>
          <h4 style={{color:"#094C83",margin:"0px"}}>
            {"Culture and Politics • "}
            {this.getCulture("strength")}
          </h4>
          <div>
            {this.getCulture("description")}
          </div>
        </div>
      </div>
    )
  },

  getOverall: function (type) {
    if (type === "strength") {
      return Math.floor(this.props.church.match * 100) + "%";
      var result = "👎";
      if (this.props.church.match > .75) {
        result = "👍👍";
      } else if (this.props.church.match > .5) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      if (this.props.church.match > .75) {
        return "Overall, this church is an excellent fit for you.";
      } else if (this.props.church.match > .5) {
        return "Overall, this church is a potential fit for you.";
      } else if (this.props.church.match > .25) {
        return "Overall, this church is might not be a great fit for you.";
      } else if (this.props.church) {
        return "Overall, this church is might not be a great fit for you.";
      }
    }
  },

  getDoctrine: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

    var difference = 0;
    var match = 0;
    var total = 0;

    this.state.user.questions.map(function (userQuestion) {
      var churchQuestion = this.props.church.questions.find(function (q) {
        return q.questionId == userQuestion.questionId;
      });
      if (!churchQuestion) { return; }
      var question = this.state.questions.find(function (q) {
        return q._id == churchQuestion.questionId;
      });
      if (question && question.category == "Doctrine") {
        if (!churchQuestion) {
          difference = difference + 4;
        } else {
          var churchAnswerScore = answerToScale(churchQuestion.answer);
          var userAnswerScore = answerToScale(userQuestion.answer);
          difference = difference + Math.abs(churchAnswerScore - userAnswerScore);
        }
        total = total + 4;
      }
    }.bind(this));

    match = total - difference;

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .6) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      if (match / total > .75) {
        return "You would likely agree with this church on many doctrinal issues.";
      } else if (match / total > .6) {
        return "You would likely agree with this church on many doctrinal issues.";
      } else if (match / total > .25) {
        return "You might disagree with this church on doctrinal issues.";
      } else if (match / total >= 0) {
        return "You might disagree with this church on doctrinal issues.";
      }
    }
  },

  getLiturgy: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

    var difference = 0;
    var match = 0;
    var total = 0;

    this.state.user.questions.map(function (userQuestion) {
      var churchQuestion = this.props.church.questions.find(function (q) {
        return q.questionId == userQuestion.questionId;
      });
      if (!churchQuestion) { return; }
      var question = this.state.questions.find(function (q) {
        return q._id == churchQuestion.questionId;
      });
      if (question && question.category == "Liturgy") {
        if (!churchQuestion) {
          difference = difference + 4;
        } else {
          var churchAnswerScore = answerToScale(churchQuestion.answer);
          var userAnswerScore = answerToScale(userQuestion.answer);
          difference = difference + Math.abs(churchAnswerScore - userAnswerScore);
        }
        total = total + 4;
      }
    }.bind(this));

    match = total - difference;

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .6) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      if (match / total > .75) {
        return "You would likely appreciate and enjoy this church's worship service and liturgy.";
      } else if (match / total > .6) {
        return "You would likely feel comfortable during this church's worship service and liturgy.";
      } else if (match / total > .25) {
        return "You might feel uncomfortable during this church's worship service and liturgy.";
      } else if (match / total >= 0) {
        return "You might feel uncomfortable during this church's worship service and liturgy.";
      }
    }
  },

  getCulture: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

    var difference = 0;
    var match = 0;
    var total = 0;

    this.state.user.questions.map(function (userQuestion) {
      var churchQuestion = this.props.church.questions.find(function (q) {
        return q.questionId == userQuestion.questionId;
      });
      if (!churchQuestion) { return; }
      var question = this.state.questions.find(function (q) {
        return q._id == churchQuestion.questionId;
      });
      if (question && question.category == "Culture") {
        if (!churchQuestion) {
          difference = difference + 4;
        } else {
          var churchAnswerScore = answerToScale(churchQuestion.answer);
          var userAnswerScore = answerToScale(userQuestion.answer);
          difference = difference + Math.abs(churchAnswerScore - userAnswerScore);
        }
        total = total + 4;
      }
    }.bind(this));

    match = total - difference;

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .6) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      if (match / total > .75) {
        return "You would likely agree with this church on many cultural and political issues.";
      } else if (match / total > .6) {
        return "You may agree with this church on several cultural and political issues.";
      } else if (match / total > .25) {
        return "You might disagree with this church on many cultural and political issues.";
      } else if (match / total >= 0) {
        return "You might disagree with this church on many cultural and political issues.";
      }
    }
  },
});

module.exports = Component;
