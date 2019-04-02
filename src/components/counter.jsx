import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value  //props in components has all the params passed except key
  };

  handleIncrement = () => {                                     
    this.state.count++;
    this.setState({ count: this.state.count });
  };

  render() {
    return (
      <div>
         {/* children prop is used in case to pass some data like Dialog Box */}
         <span>
        {this.props.children}  {this.props.counter.id}                   
        </span>                                                                                                                                                                                                       
        <span className={this.getBadgeClasses()}>{this.codeFormatter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Counter
        </button>

        <div className="btn btn-danger btn-sm m-2"
        onClick={() => this.props.onDelete(this.props.counter.id)}
        >Delete</div>

      </div>
    );
  }

  codeFormatter() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }
}

export default Counter;
