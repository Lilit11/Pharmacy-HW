import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "../features/items/items.slice";

export const store = configureStore({
    reducer: itemReducer
})