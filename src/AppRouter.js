import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { createBrowserHistory } from 'history';
import './styles/styles.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact={true} component={LandingPage} />
      </Switch>
    </Router>
  );
}
