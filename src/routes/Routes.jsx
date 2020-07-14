import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Edit from '../views/edit/edit';

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
    </Switch>
  );
};

export default Routes;
