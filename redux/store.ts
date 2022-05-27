import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./slices/statusSlice";
import type { StatusType } from "./types";

export const selectStatus = (state: StatusType) => state;

export const store = configureStore({
    reducer: {
        status: statusSlice.reducer
    }
})