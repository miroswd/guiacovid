// Routes
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Application from './components/application/Application';
import FilteredApps from './components/filteredApps/FilteredApps';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/app/:title" component={Application} />
      <Route path="/topics/:title" component={FilteredApps} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
