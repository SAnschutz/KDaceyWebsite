import React from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import Cakes from './components/Cakes';
import Cookies from './components/Cookies';
import Cupcakes from './components/Cupcakes';
import Chocolates from './components/Chocolates';
import { createBrowserHistory } from 'history';
import './styles/styles.scss';

export const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <HashRouter history={history} basename='/'>
      <div>
        <Route path='/' exact={true} component={LandingPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/cakes' component={Cakes} />
        <Route path='/cookies' component={Cookies} />
        <Route path='/cupcakes' component={Cupcakes} />
        <Route path='/chocolates' component={Chocolates} />
      </div>
    </HashRouter>
  );
}
