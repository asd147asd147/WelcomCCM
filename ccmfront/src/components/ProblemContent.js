import React, { Component } from 'react'
import RestrictionList from './RestrictionList'
import Example from './Example'

class ProblemContent extends Component {
  
  componentDidMount(){
    window.addEventListener("resize",this.updateDimensions);
  }
  
  updateDimensions(){
    document.querySelector("#root").style.width = parseInt(window.innerWidth)-parseInt(document.querySelector(".editor").offsetWidth)+"px";
  }

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
              <ul>{RestrictionList(this.props.data)}</ul>
            </div>
            <div className="problem-description-body-ioexam">
              <h4>입출력 예시</h4>
              <ul>{Example(this.props.data)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemContent;