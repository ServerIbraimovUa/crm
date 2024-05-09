import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((product) => product.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                state.map((product) => {
                    return product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product;
                });
            }
        },

        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.filter((product) => product.id !== action.payload.id);
        },

        clearCart: (state) => {
            state = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
