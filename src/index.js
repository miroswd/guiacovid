import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Application from './components/application/Application';
// import Person from './teste';

render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/app/:title" component={Application} />
      {/* <Route path="/teste" component={Person} /> */}
    </Switch>
  </BrowserRouter>,
  document.querySelector('#root')
);
