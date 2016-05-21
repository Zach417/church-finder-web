var React = require('react');

var Style = require('./Style.jsx');
var ListItem = require('./ListItem.jsx');

var Footer = React.createClass({
  render: function() {
    var today = new Date(Date.now());
    return (
      <div style={Style.container} className="row-fluid">
				<div className="col-lg-8 col-xs-12 col-centered">
					<div>
            {"Copyright © 2016-" + today.getFullYear() + " Church Finder"}
            {" | zach@churchetto.com"}
            {" | 417.849.3612"}
            {" | Springfield, MO"}
					</div>
			    <div style={{paddingTop:"10px"}}>
            {"Founded, built, and maintained by Zach Allen"}
  				</div>
				</div>
      </div>
    );
  }
});

module.exports = Footer;
