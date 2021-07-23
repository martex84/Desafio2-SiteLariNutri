import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './view/pages/Home';
import Cadastro from './view/pages/Cadastro';

export default function Rota(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route exact component={Cadastro} path="/cadastro" />
            </Switch>
        </BrowserRouter>
    );
}