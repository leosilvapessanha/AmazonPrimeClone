import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../components/header/header';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Header} />
    </Switch>
  </>
);

export default Routes;
