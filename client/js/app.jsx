var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Footer = require('./components/Footer/Index.jsx');
var Header = require('./components/Header/Index.jsx');
var Home = require('./components/Home/Index.jsx');
var Search = require('./components/Search/Page.jsx');
var Church = require('./components/Church/Page.jsx');
var ChurchAdmin = require('./components/Church.Admin/Page.jsx');
var ChurchesAdmin = require('./components/Churches.Admin/Page.jsx');
var DenominationAdmin = require('./components/Denomination.Admin/Page.jsx');
var DenominationsAdmin = require('./components/Denominations.Admin/Page.jsx');
var QuestionAdmin = require('./components/Question.Admin/Page.jsx');
var QuestionsAdmin = require('./components/Questions.Admin/Page.jsx');
var Results = require('./components/Results/Page.jsx');

function handleRouterUpdate () {
	$("#menu-sub").slideUp("fast");
	$("#menu-button").text(". . .");
}

var App = React.createClass({
	render: function () {
		return (
			<div style={{height:"100%"}}>
        <Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
});

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
		<Route path="search" component={Search} />
		<Route path="results" component={Results} />
		<Route path="church">
			<Route path=":id" component={Church} />
		</Route>
		<Route path="admin">
	    <Route path="church">
	      <IndexRoute component={ChurchesAdmin} />
	      <Route path=":id" component={ChurchAdmin} />
			</Route>
	    <Route path="denomination">
	      <IndexRoute component={DenominationsAdmin} />
	      <Route path=":id" component={DenominationAdmin} />
			</Route>
	    <Route path="question">
	      <IndexRoute component={QuestionsAdmin} />
	      <Route path=":id" component={QuestionAdmin} />
			</Route>
		</Route>
  </Route>
);

ReactDOM.render(
 	<Router
		history={browserHistory}
		onUpdate={handleRouterUpdate}
		routes={Routes} />,
	document.getElementById("container")
);
