import React, { Component } from 'react';
import './App.css';

class Problem_Content extends Component {
  RestrictionList = this.props.data.restric.map((v,i) => {<li key={v.cont}>{v.cont}</li>});
  example = this.props.data.ioexam.map(v => {
    <div>
      
    <h5>입출력 예시 {v.id}</h5>
    <ul>
      <li key={v.input}>{v.input}</li>
      <li key={v.output}>{v.output}</li>
    </ul>
    </div>
  });
  
  render() {
    return (
      <div className="problem">
        <div className="problem-description">
          <h3>{this.props.data.title}</h3>
          <div className="problem-description-body">
            <div className="problem-description-body-content">
              <p>{this.props.data.desc}</p>
            </div>
            <div className="problem-description-body-restriction">
              <h4>제한 사항</h4>
              <ul>{this.RestrictionList}</ul>
            </div>
            <div className="problem-description-body-ioexam">
              <h4>입출력 예시</h4>
              <ul>{this.example}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component{
  prob = {
    num:1,
    title:'문제 이름',
    desc:'문제 설명 블라블라',
    restric:[
      {id:1, cont:'제약사항 1번'},
      {id:2, cont:'제약사항 2번'},
      {id:3, cont:'제약사항 3번'}
    ],
    ioexam:[
      {id:1, input:'input data example1', output:'output data example1'},
      {id:2, input:'input data example2', output:'output data example2'},
      {id:3, input:'input data example3', output:'output data example3'}
    ]
  }
  render(){
      return (
        <Problem_Content data={this.prob}></Problem_Content>
      );
    }
}

export default App;