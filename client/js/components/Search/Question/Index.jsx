var React = require('react');
var $ = require('jquery');
var Style = require('./Style.jsx');
var Button = require('../Button/Index.jsx');
var UserStore = require('../../../stores/user');

var Component = React.createClass({
  getInitialState: function () {
    return {
      selected: '',
      options: '',
    }
  },

  componentWillMount: function () {
    this.setState({
      selected: '',
      options: ["Agree", "Disagree", "Not sure"]
    });

    UserStore.get(function (users) {
      var user = users[0];
      user.questions.map(function (item, i) {
        if (item.questionId == this.props.question._id) {
          this.setState({
            selected: item.answer,
            options: ["Agree", "Disagree", "Not sure"]
          });
        }
      }.bind(this));
    }.bind(this));
  },

  render: function () {
    return (
      <div className="row-fluid">
        <label style={Style.label}>
          <h3 style={{margin:"10px"}}>{this.props.question.name}</h3>
        </label>
        <div className="row">
          {this.getOptions()}
        </div>
      </div>
    )
  },

  getOptions: function () {
    var className;
    if (this.state.options.length == 1) {
      className = "col-xs-12";
    } else if (this.state.options.length == 2) {
      className = "col-sm-6 col-xs-12";
    } else if (this.state.options.length == 3) {
      className = "col-sm-4 col-xs-12";
    } else {
      className = "col-md-3 col-xs-12";
    }

    return this.state.options.map(function (option) {
      var onClick = function () {
        this.props.onSelect(this.props.question);
        this.setState({
          selected: option
        });

        UserStore.get(function (users) {
          var user = users[0];
          var changed = false;

          user.questions.map(function (item, i) {
            if (item.questionId === this.props.question._id) {
              user.questions[i].answer = option;
              changed = true;
            }
          }.bind(this));

          if (changed === false) {
            user.questions.push({
              questionId: this.props.question._id,
              answer: option,
            });
          }

          UserStore.update(user, function () {
          });
        }.bind(this));
      }.bind(this)

      var isSelected = false;
      if (this.state.selected == option) {
        isSelected = true;
      }

      return (
        <Button
          key={option}
          className={className}
          onClick={onClick}
          isSelected={isSelected}
          label={option} />
      )
    }.bind(this));
  },
});

module.exports = Component;
