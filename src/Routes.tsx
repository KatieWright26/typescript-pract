import { Redirect, Route, Switch } from 'react-router-dom';
import Generics from './pages/Generics';
import React from 'react';
import Select from './pages/Select';
import Tweet from './pages/Tweet';

const Routes = () => (
    <Switch>
        <Route path="/twitter"><Tweet /></Route>
        <Route path="/select"><Select /></Route>
        <Route path="/generics"><Generics /></Route>

        <Redirect exact from="/" to="/object-design-notes" />
    </Switch>
);

export default Routes;
