import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Application from './components/application/Application';
import FilteredApps from './components/filteredApps/FilteredApps';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/app/:title" component={Application} />
      <Route path="/apps/:id" component={FilteredApps} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
