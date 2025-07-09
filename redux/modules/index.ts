import { combineReducers } from "@reduxjs/toolkit";
import userReducer, { userAPI } from "./user";
import counterReducer from "./counter";

export const combinedReducer = combineReducers({
  ...userReducer,
  ...counterReducer,
});

export const combinedMiddleware = userAPI.middleware;