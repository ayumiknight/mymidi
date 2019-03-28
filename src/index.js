import React from 'react';
import { render } from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

window.ReactHistory = createBrowserHistory();





render((
	<div id="react-app-container">
		<Router history={ReactHistory}>
			<div>
				<Route exact path="/home" component={require('./pages/home.jsx').default}/>
			</div>
		</Router>
	</div>
), document.getElementById('root'));
