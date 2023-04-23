import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Reducer from "./reducer/Reducer";

const store = configureStore({
  reducer: {
    Reducer,
  }
})

export default store;
