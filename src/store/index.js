import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialcounterState = { counter: 0, showcounter: true };
const counterslice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showcounter = !state.showcounter;
    },
  },
});
const initialAuthstate = { isauthenticated: false };
const authslice = createSlice({
  name: "authentication",
  initialState: initialAuthstate,
  reducers: {
    login(state) {
      state.isauthenticated = true;
    },
    logout(state) {
      state.isauthenticated = false;
    },
  },
});
// const CounterReducer = (state = initialstate, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showcounter: state.showcounter };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showcounter: state.showcounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showcounter: !state.showcounter,
//       counter: state.counter + action.amount,
//     };
//   }
//   return state;
// };
const store = configureStore({
  reducer: { counter: counterslice.reducer, auth: authslice.reducer },
});
export const counterAction = counterslice.actions;
export const authActions = authslice.actions;
export default store;
