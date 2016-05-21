var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var ButtonPrimary = require('../Button/Index.jsx').Primary;

var Component = React.createClass({
  componentDidMount: function () {
    window.scrollTo(0,0);
  },

  render: function() {
    return (
      <div className="container-fluid" style={Style.container}>
        <div className="row" style={{
            paddingTop:"60px",
            paddingBottom:"40px",
            color:"white",
            backgroundColor:"#222",
            backgroundImage:"url('/img/reading-outside')",
            backgroundSize:"cover",
          }}>
          <div className="col-xs-12">
            <h1 style={{textShadow:"2px 2px #222",fontSize:"64px"}}>
              Church Finder
            </h1>
            <h4 style={{textShadow:"2px 2px #222",fontSize:"16px"}}>
              A TOOL FOR MATCHING PEOPLE WITH CHURCHES
            </h4>
            <div style={Style.buttonContainer}>
              <ButtonPrimary
                label={"Find Churches"}
                onClick={this.handleClick_FindChurches} />
            </div>
          </div>
        </div>
        <div className="row" style={{
            paddingTop:"40px"
          }}>
          <div className="col-sm-4 col-xs-12">
            <h3>What?</h3>
            <p>
              Match your beliefs and preferences to churches in your
              area in order to find a church that you would be most
              comfortable with and happy being a part of.
            </p>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>Why?</h3>
            <p>
              It takes too long to find a church that's ideal. My town
              has over 250 churches, so it would take me close to 5
              years to visit them all and find the best one for me.
            </p>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>Huh?</h3>
            <p>
              Church websites don't always have the kind of information
              that you're looking for, such as doctrinal beliefs and
              liturgical practices. So, I gather specific data and
              leverage it in order to make finding a church simple and
              effective.
            </p>
          </div>
        </div>
      </div>
    );
  },

  handleClick_FindChurches: function () {
    BrowserHistory.push("/search");
  }
});

module.exports = Component;
