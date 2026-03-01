import { useReducer } from "react"

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'Increament':
            return { count: state.count + 1 }
        case 'Decreament':
            return { count: state.count - 1 }
        case 'IncreamentBy10':
            return { count: state.count + 10 }
        case 'Reset':
            return { count: state.count = 0 }
            
    }
}

function index() {

    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    return (
        <>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'Increament' })}>+</button>
            <button onClick={() => dispatch({ type: 'Decreament' })}>-</button>
            <button onClick={() => dispatch({ type: 'IncreamentBy10' })}>+ 10</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>

        </>
    )
}

export default index