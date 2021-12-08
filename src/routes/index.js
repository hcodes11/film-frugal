import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Watchlist from '../views/Watchlist';
import Details from '../views/Details';
import Home from '../views/Home';
import Delete from '../views/Delete';
import Popular from '../views/Popular';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/watchlist" component={Watchlist} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/delete/:firekey" component={Delete} />
      </Switch>
    </div>
  );
}
