import { createSlice } from '@reduxjs/toolkit'

// const [counter, setCounter] = useState(0)
// const increaseBy1 = () => setCounter(counter + 1 )
// const increaseBy10 = () => setCounter(counter - 10 )

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increaseBy1: (state) => state + 1,
        increaseBy10: (state) => state + 10,
        decreaseBy1: (state) => state - 1,
        decreaseBy10: (state) => state - 10,
        increaseByValue: (state, action) => state += action.payload
    }
})

export const { increaseBy1, increaseBy10, decreaseBy1, decreaseBy10, increaseByValue } = counterSlice.actions

export default counterSlice.reducer