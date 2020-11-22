// import the createstore function from redux library
import { createStore } from "redux";

// --- Action generators ---
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

// setCount
const setCount = ({ count } = {}) => {
  if (count && typeof count === "number") {
    return {
      type: "SET",
      count,
    };
  } else {
    return { type: "SET", count: store.getState().count };
  }
};

// resetCount
const resetCount = () => ({ type: "RESET" });

// Destructure arguments passed into functions

// REDUCERS
/* 
reducers are pure functions - output is determined by the input
never change state or action
*/
const countReducer = (state = { count: 0 }, action) => {
  // Use switch instead of if statement
  switch (action.type) {
    case "INCREMENT":
      // allow for dynamic store changes
      return { count: state.count + action.incrementBy };

    case "DECREMENT":
      return { count: state.count - action.decrementBy };

    case "RESET":
      return { count: (state.count = 0) };

    case "SET":
      return { count: action.count };

    default:
      return state;
  }
};

// create a new store and create state
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Increment the count?

// Action - an object that gets sent to the store

// Increment count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(setCount({}));
store.dispatch(resetCount());
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "RESET" });
// store.dispatch({ type: "DECREMENT", decrementBy: 7 });

// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "SET", count: 51 });
// store.dispatch({ type: "SET", count: 51 });
