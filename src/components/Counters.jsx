import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {


  render() {
    const {counters,onDelete,onIncreament,onReset,onDecrement}=this.props;
    return (
      <div>
        <button className="btn btn-primary m-4" onClick={onReset}>
          Reset
        </button>
        {counters.map( passer => (
          <Counter
            key={passer.id}
            passer={passer}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
