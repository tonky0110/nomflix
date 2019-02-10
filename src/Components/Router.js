import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/tv" component={TV} />
			<Route path="/search" component={Search} />
			<Route path="*" to="/" />
		</Switch>
	</Router>
);