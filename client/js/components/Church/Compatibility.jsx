var React = require('react');
var Style = require('./Style.jsx');
var UserStore = require('../../stores/user');
var QuestionStore = require('../../stores/question');

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
    return (
      <div>
        <h3 style={{margin:"0px"}}>
          {"Compatibility • "}
          {this.getOverall("strength")}
        </h3>
        <div>
          {this.getOverall("description")}
        </div>
        <div>
          <h4 style={{margin:"0px"}}>
            {"Doctrinal Issues • "}
            {this.getDoctrine("strength")}
          </h4>
          <div>
            {this.getDoctrine("description")}
          </div>
        </div>
        <div>
          <h4 style={{margin:"0px"}}>
            {"Liturgy and Worship • "}
            {this.getLiturgy("strength")}
          </h4>
          <div>
            {this.getLiturgy("description")}
          </div>
        </div>
        <div>
          <h4 style={{margin:"0px"}}>
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
      var match = "Overall, you would likely not have excellent opportunities at this church. ";
      if (this.props.church.match > .75) {
        match = "Overall, this church is an excellent match for you. ";
      } else if (this.props.church.match > .5) {
        match = "Overall, this is pretty good church for you. ";
      }

      return match;
    }
  },

  getDoctrine: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

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
        if (churchQuestion && churchQuestion.answer == userQuestion.answer) {
          match++;
        }
        total++;
      }
    }.bind(this));

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .5) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      var result = "You wouldn't agree with most of the doctrinal issues at this church. ";
      if (match / total > .75) {
        result = "This church aligns very strongly with your doctrinal beliefs, and you would agree with them on most issues. ";
      } else if (match / total > .5) {
        result = "You would agree with most of this church's doctrinal issues, but there would still be several topics that you may not agree with. ";
      }
      return result;
    }
  },

  getLiturgy: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

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
        if (churchQuestion && churchQuestion.answer == userQuestion.answer) {
          match++;
        }
        total++;
      }
    }.bind(this));

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .5) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      var result = "You would most likely feel uncomfortable during this church's worship. ";
      if (match / total > .75) {
        result = "You would most likely really enjoy this church's worship service. ";
      } else if (match / total > .5) {
        result = "You would most likely be comfortable at this church's worship service, but it may not be your favorite. ";
      }
      return result;
    }
  },

  getCulture: function (type) {
    if (!this.state.user) { return }
    if (!this.state.questions) { return }

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
        if (churchQuestion && churchQuestion.answer == userQuestion.answer) {
          match++;
        }
        total++;
      }
    }.bind(this));

    if (type === "strength") {
      return Math.floor(match / total * 100) + "%";
      var result = "👎";
      if (match / total > .75) {
        result = "👍👍";
      } else if (match / total > .5) {
        result = "👍";
      }
      return result;
    } else if (type === "description") {
      var result = "You may not mesh well with the political environment of this church. ";
      if (match / total > .75) {
        result = "Your political beliefs would fit right into this church and closely align with the church's belifs. ";
      } else if (match / total > .5) {
        result = "Your political beliefs are mostly aligned with the beliefs of this church, but you may not agree on all topics. ";
      }
      return result;
    }
  },
});

module.exports = Component;
