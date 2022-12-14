import { configureStore} from "@reduxjs/toolkit";
import {CartSlicer} from "./CartSlicer";




export const store = configureStore({
    reducer:{
        cart: CartSlicer.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
});

