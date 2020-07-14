import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={MainLayout} path="/" />
    </Switch>
  );
};

export default Routes;
