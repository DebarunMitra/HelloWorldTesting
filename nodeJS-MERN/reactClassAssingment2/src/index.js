import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    increment(){
      this.setState((state, props) => ({
        count:state.count + props.increment;
      }));
    }
    decrement(){
      this.setState((state, props) => ({
        count:state.count - props.decrement;
      }));
    }
    reset(){
      this.setState((state, props) => ({
        count:0;
      }));
    }
  }
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
