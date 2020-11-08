import React, { Component } from 'react';

class PartitionBar extends Component {
    state = {
      pos3 : 0
    };
    closeDragElment = (e) => {
      e.preventDefault();
      onmouseup = null;
      onmousemove = null;
      console.log("closeDragElement");
    };
    elementDrag = (e) => {
      e.preventDefault();
      console.log("elementDrag");
      this.setState((prevState) => {
        return {
          pos3: e.clientX
        }
      });
      console.log("pos3 : " + (window.outerWidth-this.state.pos3));
      if(this.state.pos3>50 && (window.outerWidth-this.state.pos3)>50) {
        document.querySelector("#root").style.width = this.state.pos3+"px";
        document.querySelector(".problem").style.width = (this.state.pos3-10)+"px";
        document.querySelector(".editor").style.width = (window.outerWidth-this.state.pos3)+ "px";
      }
    }
    dragMouseDown = (e) => {
      e.preventDefault();
      console.log("dragMouseDown");
      console.log("e.clientX = " + this.state.pos3);
      onmouseup = this.closeDragElment;
      onmousemove = this.elementDrag;
    };
    render() {
      return (
        <div className="partition_bar" onMouseDown={this.dragMouseDown} ></div>
      );
    }
  }

  export default PartitionBar;