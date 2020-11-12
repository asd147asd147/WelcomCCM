import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home'
import Problem from './Page/Problem'
import Make from './Page/Make';

class Start extends Component{
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/problem" exact={true} component={Problem} />
                <Route path="/make" exact={true} component={Make}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Start;