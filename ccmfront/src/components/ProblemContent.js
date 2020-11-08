import React, { Component } from 'react'

class ProblemContent extends Component {
    RestrictionList = this.props.data.restric.map(v => {
      return (
          <li key={'restric_' + v.id}>{v.cont}</li>
      );
    });
    example = this.props.data.ioexam.map(v => {
        return (
            <div className='ex_div' key={'ex_div' + v.id}>
                <h5>입출력 예시 {v.id}</h5>
                <ul>
                    <li key={'iexam_'+v.id}>{v.input}</li>
                    <li key={'oexam_'+v.id}>{v.output}</li>
                </ul>
            </div>
        );
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

export default ProblemContent;