var React = require('react');
var $ = require('jquery');
require('jquery-ui');
var BrowserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Christian = require('./Christian/Index.jsx');
var Button = require('./Button/Index.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary;
var ButtonPrimaryLarge = require('../Button/Index.jsx').Primary.Large;
var ButtonSecondaryLarge = require('../Button/Index.jsx').Secondary.Large;

function getComponentNameFromPage (page) {
  switch (page) {
    case 0: return "Doctrine (1 of 3)";
    case 1: return "Liturgy & Worship (2 of 3)";
    case 2: return "Culture & Politics (3 of 3)";
    default: return "-";
  }
}

var Component = React.createClass({
  getInitialState: function () {
    this.components = {
      Christian: [
        (<Christian.Doctrine next={this.handleClick_Next} />),
        (<Christian.Liturgy next={this.handleClick_Next} />),
        (<Christian.Culture next={this.handleClick_Next} />),
      ],
    };
    return {
      religion: 'Christian',
      page: 0,
    }
  },

  render: function () {
    return (
      <div>
        <div
          style={Style.componentContainer}
          className="row">
          <h3
            style={{margin:"0px",textAlign:"left"}}
            className="col-sm-4 col-xs-12">
            Search Tool
          </h3>
          <h3
            style={{margin:"0px",textAlign:"right"}}
            className="col-sm-8 hidden-xs">
            {"Current component: "}
            {getComponentNameFromPage(this.state.page)}
          </h3>
          <h3
            style={{margin:"0px",textAlign:"left"}}
            className="hidden-lg hidden-md hidden-sm col-xs-12">
            {"Current component: "}
            {getComponentNameFromPage(this.state.page)}
          </h3>
          <h4
            style={{fontSize:"16px",margin:"0px",textAlign:"left"}}
            className="col-xs-12">
            Please take a moment to complete this short survey
            in order to identify what churches are best for
            you.
          </h4>
        </div>
        <div
          id="search-component"
          style={Style.componentContainer}
          className="row">
          {this.getCurrentComponent()}
        </div>
        {this.getButtonComponent()}
      </div>
    )
  },

  getButtonComponent: function () {
    if (this.state.religion == "" || this.state.page < 0) {
      return;
    }

    return (
      <div
        id="search-navigation"
        style={Style.componentContainer}
        className="row">
        {this.getButtons()}
      </div>
    )
  },

  getButtons: function () {
    if (this.state.religion == "" || this.state.page < 0) {
      return;
    }

    if (this.state.page + 1 > this.components[this.state.religion].length) {
      return (
        <div className="col-xs-12">
          <ButtonSecondaryLarge
            label={"Back"}
            onClick={this.handleClick_Back} />
        </div>
      )
    }

    if (this.state.page === 0) {
      return (
        <div className="col-xs-12">
          <ButtonPrimaryLarge
            label={"Next"}
            onClick={this.handleClick_Next} />
        </div>
      )
    }

    return (
      <div className="col-xs-12">
        <ButtonSecondaryLarge
          label={"Back"}
          onClick={this.handleClick_Back} />
        <span style={{float:"left"}}>
          <div style={{padding:"18px 0px",width:"20px"}} />
        </span>
        <ButtonPrimaryLarge
          label={"Next"}
          onClick={this.handleClick_Next} />
      </div>
    )
  },

  getCurrentComponent: function () {
    if (this.state.religion !== "" && this.state.page >= 0) {
      return this.components[this.state.religion][this.state.page];
    }

    $("#search-navigation").hide();
    return (
      <div className="container-fluid">
        <div className="row" style={{
            paddingTop:"60px",
            paddingBottom:"40px",
          }}>
          <div className="col-xs-12">
            <h1 style={{fontSize:"64px"}}>
              Find a church
            </h1>
            <h4 style={{fontSize:"16px"}}>
              Please take a moment to complete this short survey
              in order to identify what churches are best for
              you.
            </h4>
            <div style={Style.buttonContainer}>
              <ButtonPrimary
                label={"Begin"}
                onClick={this.handleClick_Begin} />
            </div>
          </div>
        </div>
      </div>
    )
  },

  handleClick_Next: function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $("#search-component")
      .effect("pulsate", "slow", function () {
        if (this.state.page + 1 > this.components[this.state.religion].length) {
          return;
        }
        if (this.state.page + 2 > this.components[this.state.religion].length) {
          return BrowserHistory.push('/results');
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
    $('html,body').animate({ scrollTop: 0 }, 'slow');
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

  handleClick_Begin: function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $("#search-component")
      .effect("pulsate", "slow", function () {
        $("#search-navigation").show();
        this.setState({
          religion: "Christian",
          page: 0,
        });
      }.bind(this))
      .delay(100)
      .fadeIn("fast");
  },
});

module.exports = Component;
