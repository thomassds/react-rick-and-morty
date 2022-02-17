import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;