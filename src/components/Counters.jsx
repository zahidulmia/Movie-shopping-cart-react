import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  handleIncreamet = (jiji) => {
 const counters = [...this.state.counters];
 const index= counters.indexOf(jiji);
 counters[index]={...jiji};
 counters[index].value+=1;
 this.setState({counters});

    
  };
  HandleDelete = (id) => {
    const counter = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: counter });
  };
  HandleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
    });
    this.setState({ counter: counter });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary m-4" onClick={this.HandleReset}>
          Reset
        </button>
        {this.state.counters.map((passer) => (
          <Counter
            key={passer.id}
            passer={passer}
            onDelete={this.HandleDelete}
            onIncreament={this.handleIncreamet}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
