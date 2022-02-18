import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Detail from '../Pages/Detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id_character/detail" component={Detail}/>
    </Switch>
);

export default Routes;