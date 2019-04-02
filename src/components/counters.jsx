import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 8 }
    ]
  };

  handleDelete = (counterId) => {
    console.log( 'Delete Id:', counterId);
    this.state.counters.map((count) => {console.log(count.id)});
    const newCounter = this.state.counters.filter( c => c.id !== counterId);
    this.state.counters = newCounter;
    this.setState(this.state.counters);
  }
  
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter= {counter}
            onDelete={this.handleDelete}
          >
            <h4>Counter #</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
