import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoit from './pages/CreatePoint';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoit} path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;