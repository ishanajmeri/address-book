import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import SignUp from '../views/signup/signup';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={MainLayout}
        path="/signup"
      />
    </Switch>
  );
};

export default Routes;
