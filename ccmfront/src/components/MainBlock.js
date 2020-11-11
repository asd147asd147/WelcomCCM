import React, { Component } from 'react';

class MainBlock extends Component {
  onMouse = (e) => {
    console.log("onMouse");
  }
  render() {
    return(
      <div className="mainBlock" onMouseOver={this.onMouse}>
        <div className="blockContent"></div>
      </div>
    );
  }
}

export default MainBlock;