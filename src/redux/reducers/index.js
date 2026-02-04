import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todosReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const todosConfig = {
  key: "data",
  storage,
};

export default combineReducers({
  todos: persistReducer(todosConfig, todosReducer),
});
