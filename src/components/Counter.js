import classes from "./Counter.module.css";
import { counterAction } from "../store";
import { Component } from "react/cjs/react.production";
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showcounter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };
  const incrementhandler = () => {
    dispatch(counterAction.increment());
  };
  const increasehandler = () => {
    dispatch(counterAction.increase(5));
  };
  const decrementhandler = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementhandler}>Increment</button>
      <button onClick={increasehandler}>Increase By 5 </button>
      <button onClick={decrementhandler}>Decrement</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementhandler() {
//     this.props.incrementhandler();
//   }
//   decrementhandler() {
//     this.props.decrementhandler();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//         <button onClick={this.incrementhandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
