var React = require('react');
var $ = require('jquery');
require('jquery-ui');
var Style = require('./Style.jsx');
var ChristianCulture = require('./ChristianCulture.jsx');
var ChristianDoctrine = require('./ChristianDoctrine.jsx');
var ChristianLiturgy = require('./ChristianLiturgy.jsx');
var Button = require('./Button/Index.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary.Large;
var ButtonSecondary = require('../Button/Index.jsx').Secondary.Large;

var components = {
  Christian: [
    (<ChristianDoctrine />),
    (<ChristianLiturgy />),
    (<ChristianCulture />),
  ],
};

var Component = React.createClass({
  getInitialState: function () {
    return {
      religion: '',
      page: '',
    }
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div id="search-component">
          {this.getCurrentComponent()}
          <div id="search-navigation" style={{marginTop:"20px"}}>
            {this.getButtons()}
          </div>
        </div>
      </div>
    )
  },

  getButtons: function () {
    if (this.state.religion == "" || this.state.page < 0) {
      return;
    }

    return (
      <div className="row">
        <ButtonSecondary
          label={"Back"}
          onClick={this.handleClick_Back} />
        <span style={{float:"left"}}>
          <div style={{padding:"18px 0px",width:"20px"}} />
        </span>
        <ButtonPrimary
          label={"Next"}
          onClick={this.handleClick_Next} />
      </div>
    )
  },

  getCurrentComponent: function () {
    if (this.state.religion == "" || this.state.page < 0) {
      $("#search-navigation").hide();
      return (
        <div style={Style.sectionContainer} className="container-fluid">
          <h1>{"Find the perfect congregation"}</h1>
          <div className="row">
            <label style={Style.label}>
              <h3 style={{margin:"10px"}}>{"I am a..."}</h3>
            </label>
            <div className="row">
              <Button
                className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                label={"Christian"}
                onClick={this.handleClick_Religion} />
              <Button
                className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                label={"Jew"}
                onClick={this.handleClick_Religion} />
              <Button
                className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                label={"Muslim"}
                onClick={this.handleClick_Religion} />
              <Button
                className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                label={"Not sure"}
                onClick={this.handleClick_Religion} />
            </div>
          </div>
        </div>
      )
    }

    return components[this.state.religion][this.state.page];
  },

  handleClick_Next: function () {
    $("#search-component")
      .effect("puff", "fast", function () {
        if (this.state.page + 1 > components[this.state.religion].length) {
          return;
        }
        this.setState({
          religion: this.state.religion,
          page: this.state.page + 1,
        });
      }.bind(this))
      .delay(100)
      .fadeIn("fast");
  },

  handleClick_Back: function () {
    $("#search-component")
      .fadeOut("fast", function () {
        this.setState({
          religion: this.state.religion,
          page: this.state.page - 1,
        });
      }.bind(this))
      .delay(100)
      .fadeIn("fast");
  },

  handleClick_Religion: function (answer) {
    $("#search-component")
      .effect("puff", "fast", function () {
        $("#search-navigation").show();
        this.setState({
          religion: answer,
          page: 0,
        });
      }.bind(this))
      .delay(100)
      .fadeIn("fast");
  },
});

module.exports = Component;
