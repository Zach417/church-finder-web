var React = require('react');
var Style = require('./Style.jsx');
var Button = require('./Button.jsx');

var Component = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <h1>{"Start looking for a church..."}</h1>
        <div className="row">
          <label style={Style.label}>
            <h3 style={{margin:"10px"}}>{"I identify as..."}</h3>
          </label>
          <div className="row">
            <Button
              className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
              label={"Christian"} />
            <Button
              className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
              label={"Jewish"} />
            <Button
              className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
              label={"Muslim"} />
            <Button
              className={"col-lg-3 col-md-3 col-sm-6 col-xs-12"}
              label={"Not sure"} />
          </div>
        </div>
        <div className="row">
          <label style={Style.label}>
            <h3 style={{margin:"10px"}}>{"I believe the bible is..."}</h3>
          </label>
          <div className="row">
            <Button
              className={"col-lg-4 col-md-4 col-sm-6 col-xs-12"}
              label={"The only source of truth"} />
            <Button
              className={"col-lg-4 col-md-4 col-sm-6 col-xs-12"}
              label={"A source of truth"} />
            <Button
              className={"col-lg-4 col-md-4 col-sm-6 col-xs-12"}
              label={"Not important"} />
          </div>
        </div>
      </div>
    )
  },
});

module.exports = Component;
