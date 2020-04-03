import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Aplication from './components/Aplication';

render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/app" component={Aplication}/>
    </Switch>
</BrowserRouter>, document.querySelector('#root'));
