import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../CounterSlice/Index'
import cartSlice from '../CartSlice/Index'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice
    },
})