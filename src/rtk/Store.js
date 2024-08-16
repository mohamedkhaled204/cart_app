import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/Products-slice";
import  cartslice  from "./slices/Cart-slice";
export const store=configureStore({
    reducer:{
        product:productsSlice,
        cart:cartslice
    }
})