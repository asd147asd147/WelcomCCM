import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home'
import Problem from './Page/Problem'
import Make from './Page/Make';
import Login from './Page/Login';

class Start extends Component {
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/problem" component={Problem} />
                <Route path="/make" exact={true} component={Make}/>
                <Route path="/login" exact={true} component={Login}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Start;