import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProblemList from '../components/ProblemList';
import '../components/ProblemList.css';

class Home extends Component{
    render(){
        return(
        <div>
            <div className="banner">
                <img src="./banner.png" alt="banner"></img>
            </div>
            <div id="root">
                <div className="tableDiv">
                    <ProblemList className="problemListTable" proper={this.props}></ProblemList>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;