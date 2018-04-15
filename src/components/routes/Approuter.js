import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import App from '../App';
import PageNotFound from '../PageNotFound';
import MainContent from '../MainContent';
import UserProfilePage from '../UserProfilePage';
import requireAuth from '../../utils/requireAuth';

const AppRouter = () => (
  <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" exact={true} component={MainContent} />
          <Route path="/user/:id" component={requireAuth(UserProfilePage)} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
  </BrowserRouter>
);

export default AppRouter;