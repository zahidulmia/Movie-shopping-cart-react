import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="row">
 
<div className="col-1">
<span className="badge badge-success">
          <h4>{this.props.passer.value}</h4>
        </span>
</div>
<div className="col">
<button 
        onClick={() => this.props.onIncreament(this.props.passer)}
          className="btn btn-dark m-3"
        >
          +
        </button>
        <button 
        
        onClick={() => this.props.onDecrement(this.props.passer)}
         disabled={this.props.passer.value===0? "disabled": ""}
        className="btn btn-dark m-3"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.passer.id)}
          className="btn btn-danger m-3"
        >
          X
        </button>
</div>
      


      
      </div>
    );
  }
}

export default Counter;
