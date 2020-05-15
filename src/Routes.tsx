import { Redirect, Route, Switch } from 'react-router-dom';
import Generics from './pages/Generics';
import React from 'react';
import Select from './pages/Select';
import Tweet from './pages/Tweet';
import TypeUnknown from './pages/TypeUnknown';

const Routes = (): JSX.Element => (
    <Switch>
        <Route path="/twitter"><Tweet /></Route>
        <Route path="/select"><Select /></Route>
        <Route path="/generics"><Generics /></Route>
        <Route path="/unknown-type"><TypeUnknown /></Route>

        <Redirect exact from="/" to="/object-design-notes" />
    </Switch>
);

export default Routes;
