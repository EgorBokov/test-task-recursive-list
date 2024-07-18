import { combineReducers } from "@reduxjs/toolkit";
import { treeSlice } from "./treeSlice";

export const rootReducer = combineReducers({ 
    [treeSlice.reducerPath]: treeSlice.reducer,
})