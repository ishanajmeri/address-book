import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import SignUp from '../views/signup/signup';
import Welcome from '../views/welcome/welcome';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome" />
      <RouteWithLayout
        component={Welcome}
        exact
        layout={MainLayout}
        path="/welcome"
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={MainLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
      />
    </Switch>
  );
};

export default Routes;
