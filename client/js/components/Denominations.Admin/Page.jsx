var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Denominations = require('./Index.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary;
var DenominationStore = require('../../stores/denomination');

var Page = React.createClass({
  getInitialState: function () {
    return {
      denominations: [],
      isLoading: true,
    }
  },

  componentWillMount: function () {
    DenominationStore.get(function (docs) {
      this.setState({
        denominations: docs,
        isLoading: false,
      });
    }.bind(this));
  },

  componentDidMount: function() {
    window.scrollTo(0, 0);
    DenominationStore.addChangeListener(this.handleChange_DenominationStore);
  },

  componentWillUnmount: function() {
    DenominationStore.removeChangeListener(this.handleChange_DenominationStore);
  },

  render: function () {
    if (this.state.isLoading === true) {
      return (
        <div style={Style.pageContainer}>
    			<div className="row-fluid" style={Style.jumbotron} onClick={this.handleClick_AddDenomination}>
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
          <Denominations />
        </div>
      )
    }
  },

  handleChange_DenominationStore: function () {
    DenominationStore.get(function (docs) {
      this.setState({
        denominations: docs,
        isLoading: false,
      });
    }.bind(this))
  },

  handleClick_AddDenomination: function () {
    browserHistory.push("/denomination/create");
  },
});

module.exports = Page;
