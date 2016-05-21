var React = require('react');
var Style = require('../Style.jsx');
var Input = require('../../Form/Index.jsx').Input;
var UserStore = require('../../../stores/user');
var UserActions = require('../../../actions/user');

var Component = React.createClass({
  getInitialState: function () {
    return {
      user: '',
    }
  },

  componentWillMount: function () {
    UserStore.get(function (users) {
      this.setState({
        user: users[0],
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div style={Style.sectionContainer} className="container-fluid">
        <div className="row-fluid">
          <label style={Style.label}>
            <h3 style={{margin:"10px"}}>
              In which city are you looking for a church?
            </h3>
          </label>
          <Input
            type={"text"}
            attribute={"city"}
            placeholder={"City"}
            value={this.state.user.city}
            onChange={this.handleChange_Input}
            onBlur={this.handleBlur_Input} />
        </div>
        <div className="row-fluid">
          <label style={Style.label}>
            <h3 style={{margin:"10px"}}>
              In which state are you looking for a church?
            </h3>
          </label>
          <Input
            type={"text"}
            attribute={"state"}
            placeholder={"State"}
            value={this.state.user.state}
            onChange={this.handleChange_Input}
            onBlur={this.handleBlur_Input} />
        </div>
      </div>
    )
  },

  handleChange_Input: function (attribute, value) {
    var user = this.state.user;
    user[attribute] = value;
    this.setState({
      user: user,
    });
  },

  handleBlur_Input: function () {
    UserActions.update(this.state.user);
  },
});

module.exports = Component;
