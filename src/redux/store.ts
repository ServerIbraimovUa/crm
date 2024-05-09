import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import loadingReducer from "./features/loadingSlice";
export const store = configureStore({
    reducer: {
        cartReducer,
        productReducer,
        loadingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
