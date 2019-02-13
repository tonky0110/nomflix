import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Detail from 'Routes/Detail';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Route path="/show/:id" component={Detail} />
				<Route path="/movie/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
