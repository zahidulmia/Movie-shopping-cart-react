import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-success">
          <h3>{this.props.passer.value}</h3>
        </span>


        <button 
        onClick={() => this.props.onIncreament(this.props.passer)}
          className="btn btn-light m-4"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.passer.id)}
          className="btn btn-danger m-4"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
