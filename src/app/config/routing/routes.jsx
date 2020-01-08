import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/home/home';

export const AppRoutesConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
    linkName: 'Home',
  },
];

export default (
  <Switch>
    {AppRoutesConfig.map(route => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);
