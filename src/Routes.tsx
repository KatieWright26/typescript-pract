import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Select from './pages/Select';
import Tweet from './pages/Tweet';

const Routes = () => (
    <Switch>
        <Route path="/twitter"><Tweet /></Route>
        <Route path="/select"><Select /></Route>
        <Route path="/"><Home/></Route>
    </Switch>
);

export default Routes;
