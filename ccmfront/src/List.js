import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import ProblemList from './components/ProblemList';
import './components/ProblemList.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="tableDiv">
      <ProblemList className="problemListTable"></ProblemList>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();