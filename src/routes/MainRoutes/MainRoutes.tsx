import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from '../../components';

import { Home, Account, Products, Services } from '../../pages';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/conta' component={Account} />
        <Route path='/serviços' component={Services} />
        <Route path='/produtos' component={Products} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
