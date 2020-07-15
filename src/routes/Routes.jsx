import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Edit from '../views/edit/edit';
import NotFound from '../views/not-found/not-found';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={MainLayout} path="/" />
      <RouteWithLayout
        component={Edit}
        exact
        layout={MainLayout}
        path="/edit/:id"
      />
      <RouteWithLayout
        component={NotFound}
        expact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
