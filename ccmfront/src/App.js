import React, { Component } from 'react';
import './App.css';
import './components/ProblemContent.css';
import './components/PratitionBar.css';
import ProblemContent from './components/ProblemContent';
import PartitionBar from './components/PartitionBar';
import axios from 'axios';

class App extends Component{
  
  state = {
    num: 0,
    title: '',
    desc: '',
    restric:[],
    ioexam:[]
  }

  componentDidMount() {
    this._readIssues()
  }

  _readIssues = async() => {
    const res = await (await axios.get('http://localhost:5000/problem/',
    {
      params: {
        num: 3
      }
    })).data[0];
    let rest_data = []
    res.restric.map(restric => {
      rest_data.push(JSON.parse(restric))
    })
    let io_data = []
    res.ioexam.map(ioexam => {
      io_data.push(JSON.parse(ioexam))
    })
    
    this.setState({
      num: res.num,
      title: res.title,
      desc: res.desc,
      restric: rest_data,
      ioexam: io_data
    })
  }
  
  render(){
    return (
      // <MainBlock cont="Challenge"></MainBlock>
      <div className="inApp">
        <ProblemContent data={this.state}></ProblemContent>
        <PartitionBar data={1}></PartitionBar>
      </div>
    );
  }
}

export default App;