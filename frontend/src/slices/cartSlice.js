import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === itemToAdd._id);

            if (existingItem) {
                state.cartItems = state.cartItems.map(item =>
                    item._id === existingItem._id ? { ...item, quantity: itemToAdd.quantity } : item
                );
            } else {
                state.cartItems = [...state.cartItems, itemToAdd];
            }

            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            const itemToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item._id !== itemToRemove._id);
            return updateCart(state);
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;