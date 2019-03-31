import React, { Component } from "react";

class Counter extends Component {
  state = {  
      counter: 3    
  }

  render() {
    return (
      <div>
        <span className = {this.getBadgeClasse()} >{this.codeFormatter()}</span>
        <button className="btn btn-secondary btn-sm" >Counter</button>
      </div>
    );
  }

    getBadgeClasse() {
        let classes = "badge m-2 badge-";
        return classes += this.state.counter === 0 ? "warning" : "primary";
    }

    codeFormatter() {
      return this.state.counter === 0 ? 'Zero' : this.state.counter;
  }
}

export default Counter;
