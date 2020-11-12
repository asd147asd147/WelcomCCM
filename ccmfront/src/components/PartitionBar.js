import React, { Component } from 'react';
  
class PartitionBar extends Component {
    state = {
      pos3 : 0
    };
    closeDragElment = (e) => {
      e.preventDefault();
      onmouseup = null;
      onmousemove = null;
    };
    elementDrag = (e) => {
      e.preventDefault();
      this.setState((prevState) => {
        return {
          pos3: e.clientX
        }
      });
      if(this.state.pos3>300 && (window.innerWidth-this.state.pos3)>15) {
        document.querySelector("#root").style.width = (this.state.pos3)+"px";
        document.querySelector(".editor").style.width = (parseInt(window.innerWidth) - parseInt(document.querySelector("#root").style.width))+"px";
      }
      if(this.state.pos3 > window.innerWidth - 15){
        document.querySelector("#root").style.width = window.innerWidth + "px";
        document.querySelector(".editor").style.width = 0 + "px";
      }
      
    }
    dragMouseDown = (e) => {
      e.preventDefault();
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