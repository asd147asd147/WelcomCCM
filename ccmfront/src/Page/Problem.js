import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../components/ProblemContent.css';
import '../components/PratitionBar.css';
import ProblemContent from '../components/ProblemContent';
import PartitionBar from '../components/PartitionBar';
import SettingLanguage from '../components/SettingLanguage';
import axios from 'axios';

class Problem extends Component{  
  state = {
    num: 0,
    title: '',
    desc: '',
    restric:[],
    ioexam:[]
  }
  
  componentDidMount() {
    this._readIssues()
    this.addScript()
  }
  componentWillUnmount(){
    window.location.reload();
  }
  addScript = () =>{
    const script1 = document.createElement("script");
    script1.src = "./js/editor.js";
    script1.async = true;
    const script2 = document.createElement("script");
    script2.src = "./js/editor-console.js";
    script2.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  _readIssues = async() => {
    var num = 0
    if(window.location.href.lastIndexOf('&') !== -1){
      num = window.location.href.substr(window.location.href.lastIndexOf('num') + 4, window.location.href.lastIndexOf('&')-(window.location.href.lastIndexOf('num') + 4));
    }
    else{
      num = window.location.href.substr(window.location.href.lastIndexOf('num') + 4, );
    }
    const res = await (await axios.get('http://choiwonjune.iptime.org:5000/problem/',
    {
      params: {
        num: num
      }
    })).data[0];
    let rest_data = []
    res.restric.map(restric => {
      return(rest_data.push(JSON.parse(restric)))
    })
    let io_data = []
    res.ioexam.map(ioexam => {
      return(io_data.push(JSON.parse(ioexam)))
    })
    
    this.setState({
      num: res.num,
      title: res.title,
      desc: res.desc,
      restric: rest_data,
      ioexam: io_data
    })

    ReactDOM.render(
      <React.StrictMode>
        <SettingLanguage />
      </React.StrictMode>,
      document.getElementById('setting__language')
    );
  }
  
  render(){
    return (
      // <MainBlock cont="Challenge"></MainBlock>
      <div className="content">
    <div className="content-head">
      <div className="setting">
        <div className="setting__container">  
          <div className="setting__theme">
            <input id="theme__dark" type="radio" name="theme__button" defaultChecked value="dreamweaver"/>
            <label htmlFor="theme__dark" className="theme__dark">dark</label>
            <input id="theme__light" type="radio" name="theme__button" value="dracula"/>
            <label htmlFor="theme__light" className="theme__light">light</label>
          </div>
          <div id="setting__language"></div>
        </div>
      </div>
    </div>
    <div className="content-body">
      <div id="root">
        <div className="inApp">
          <ProblemContent data={this.state}></ProblemContent>
          <PartitionBar data={1}></PartitionBar>
        </div>
      </div>
      <div className="editor">
        <div className="editor__wrapper">
          <div className="editor__body">
            <div id="editorCode" className="editor__code"></div>
          </div>
          <div className="editor__footer">
            <div className="editor__footer--top">
              <button className="editor__btn editor__run">Run &gt;</button>
              <button className="editor__btn editor__reset">Reset &gt;</button>
            </div>
            <div className="editor__footer--bottom">
              <div className="editor__consols">
                <ul className="editor__console-logs"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-foot"></div>
  </div>
    );
  }
}

export default Problem;