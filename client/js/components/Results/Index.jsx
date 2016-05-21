var React = require('react');
var Style = require('./Style.jsx');
var ListItem = require('./ListItem.jsx');
var Filters = require('./Filters.jsx');
var SearchService = require('../../services/MethodInterface').search;

var Churches = React.createClass({
  getInitialState: function () {
    this.searchResults = [];
    return {
      churches: [],
      isLoading: true,
    }
  },

  componentWillMount: function () {
    SearchService.execute(function (docs) {
      this.searchResults = docs;
      this.setState({
        churches: docs,
        isLoading: false,
      });
    }.bind(this));
  },

  componentDidMount: function() {
    window.scrollTo(0, 0);
  },

  render: function () {
    if (this.state.isLoading === true) {
      return (
        <div style={Style.pageContainer}>
    			<div style={Style.jumbotron} onClick={this.handleClick_AddChurch}>
            <img src="/img/wait" />
          </div>
        </div>
      )
    }

    return (
      <div
        style={Style.componentContainer}
        className="container-fluid">
        <div className="row">
          <div
            style={{padding:"0px"}}
            className="col-lg-8 col-xs-12 col-centered">
            <h1 style={{margin:"0px"}}>
              Churches where you could do great things
            </h1>
          </div>
        </div>
        <Filters
          churches={this.searchResults}
          onFilter={this.handleFilter} />
        <div className="row">
          <div
            style={{padding:"0px"}}
            className="col-lg-8 col-xs-12 col-centered">
            {this.getChurches()}
          </div>
        </div>
      </div>
    )
  },

  getChurches: function () {
    return this.state.churches.map(function (doc, i) {
      return (
        <ListItem key={i} church={doc} />
      )
    });
  },

  handleFilter: function (churches) {
    this.setState({
      churches: churches,
      isLoading: false,
    });
  },
});

module.exports = Churches;
