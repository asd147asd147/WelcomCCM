import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SettingLanguage.css';

class SettingLanguage extends Component {
    render() {
        var num = 0
        if(window.location.href.lastIndexOf('&') !== -1){
        num = window.location.href.substr(window.location.href.lastIndexOf('num') + 4, window.location.href.lastIndexOf('&')-(window.location.href.lastIndexOf('num') + 4));
        }
        else{
        num = window.location.href.substr(window.location.href.lastIndexOf('num') + 4, );
        }
        var lang = window.location.href.substr(window.location.href.lastIndexOf("lang") + 5);
        // console.log(lang)
        switch(lang){
            case 'python3':
                lang = 'Python3';
                break;
            case 'c':
                lang = 'C';
                break;
            case 'cpp':
                lang = 'C++';
                break;
            default:
                lang = 'Python3';
                break;
        }
      return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                { lang }
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href={"?num="+num + "&lang=python3"}>Python3</Dropdown.Item>
                <Dropdown.Item href={"?num="+num + "&lang=c"}>C</Dropdown.Item>
                <Dropdown.Item href={"?num="+num + "&lang=cpp"}>C++</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      );
    }
  }

  export default SettingLanguage;