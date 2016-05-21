var React = require('react');
var Style = require('./Style.jsx');
var FilterButton = require('./FilterButton.jsx');

var Component = React.createClass({
  getInitialState: function () {
    return {
      filters: [],
    }
  },

  render: function () {
    return (
      <div className="row">
        <div 
          style={{padding:"0px"}}
          className="col-lg-8 col-xs-12 col-centered">
          <h4 style={{margin:"7px 0px"}}>
            <b>Filters</b>
          </h4>
          <FilterButton
            label={"Roman Catholicism"}
            onClick={this.handleClick_RomanCatholic} />
          <FilterButton
            label={"Protestantism"}
            onClick={this.handleClick_Protestant} />
          <FilterButton
            label={"Eastern Orthodoxy"}
            onClick={this.handleClick_EasternOrthodoxy} />
        </div>
      </div>
    )
  },

  filter: function () {
    var result = this.props.churches;
    for (var i = 0; i < this.state.filters.length; i++) {
      result = result.filter(this.state.filters[i].method);
    }
    this.props.onFilter(result);
  },

  addFilter: function (id, method) {
    var filters = this.state.filters;
    filters.push({
      id: id,
      method: method,
    });
    this.setState({filters:filters});
  },

  removeFilter: function (id) {
    for (var i = 0; i < this.state.filters.length; i++) {
      if (this.state.filters[i].id === id) {
        var result = this.state.filters;
        result.splice(i,1);
        this.setState({filters:result});
      }
    }
  },

  handleClick_RomanCatholic: function (event) {
    if (event === 'pressed') {
      this.addFilter("Roman Catholicism", function (church) {
        return church.classification === "Roman Catholicism";
      });
    } else {
      this.removeFilter("Roman Catholicism");
    }
    this.filter();
  },

  handleClick_Protestant: function (event) {
    if (event === 'pressed') {
      this.addFilter("Protestantism", function (church) {
        return church.classification === "Protestantism";
      });
    } else {
      this.removeFilter("Protestantism");
    }
    this.filter();
  },

  handleClick_EasternOrthodoxy: function (event) {
    if (event === 'pressed') {
      this.addFilter("Eastern Orthodoxy", function (church) {
        return church.classification === "Eastern Orthodoxy";
      });
    } else {
      this.removeFilter("Eastern Orthodoxy");
    }
    this.filter();
  },
});

module.exports = Component;
