import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 3,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <ul>
            {this.state.tags.length === 0 && "Please create a new tag..."}
            {this.renderTags()}
        </ul>
      </div>
    );
  }

  renderTags() {
    if(this.state.tags.length === 0) 
        return <p>There are no tags</p>
    return <ul> {this.state.tags.map( tag => <li key={tag}>{tag}</li> )} </ul>
  }

}

export default Counter;
