import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../reducer";

// const mapStateToProps = state => state;
function mapStateToProps(state) {
  return { count: state };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};

class App extends Component {
  render() {
    let { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <p>
          <button
            onClick={() => {
              increment();
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
          <button
            disabled={count === 0}
            onClick={() => {
              reset();
            }}
          >
            reset
          </button>
        </p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
