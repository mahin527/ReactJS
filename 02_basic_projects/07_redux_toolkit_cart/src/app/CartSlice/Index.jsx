import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: 1, name: 'Laptop', emoji: '💻', price: 10000 },
        { id: 2, name: 'Smartphone', emoji: '📱', price: 5000 },
        { id: 3, name: 'Camera', emoji: '📷', price: 8000 }
    ],
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer