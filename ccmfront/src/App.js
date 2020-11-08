import React, { Component } from 'react';
import './App.css';
import './components/ProblemContent.css';
import './components/PratitionBar.css';
import ProblemContent from './components/ProblemContent';
import PartitionBar from './components/PartitionBar';

// class MainBlock extends Component {
//   onMouse = (e) => {
//     console.log("onMouse");
//   }
//   render() {
//     return(
//       <div className="mainBlock" onMouseOver={this.onMouse}>
//         <div className="blockContent"></div>
//       </div>
//     );
//   }
// }
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
    ],
  }
  render(){
    return (
      // <MainBlock cont="Challenge"></MainBlock>
      <div className="inApp">
        <ProblemContent data={this.prob}></ProblemContent>
        <PartitionBar data={1}></PartitionBar>
      </div>
    );
  }
}

export default App;