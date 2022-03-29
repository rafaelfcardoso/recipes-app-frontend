import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Foods, Drinks, Explore, FoodDetail, DrinkDetail, Profile } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/foods/:id" component={ FoodDetail } />
    <Route path="/foods" component={ Foods } />
    <Route path="/drinks/:id" component={ DrinkDetail } />
    <Route path="/drinks" component={ Drinks } />
    <Route path="/explore" component={ Explore } />
    <Route path="/profile" component={ Profile } />
  </Switch>
);

export default Routes;