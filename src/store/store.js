import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "../slices/customerSlice"

export const store=configureStore({
    reducer:{
        customers: customersReducer,
    
    }
})
