import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRedirect, hashHistory} from 'react-router';
import STORE from './redux-store/index';
// web components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Page from './components/layout/Page';
// pages
import Dashboard from './components/pages/Dashboard';

render(
	<Provider store={STORE}>
		<Router history={hashHistory}>
			<Route path="/" component={Page}>
				<IndexRedirect to="/dashboard" />
				<Route path="dashboard" components={{content: Dashboard, header: Header, footer: Footer}} />
			</Route>
			<Redirect path="*" to="dashboard"/>
		</Router>
	</Provider>,
	document.getElementById('app')
);
