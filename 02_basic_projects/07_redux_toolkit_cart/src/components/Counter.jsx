import { useDispatch, useSelector } from 'react-redux'
import { increaseBy1, increaseBy10, decreaseBy1, decreaseBy10, increaseByValue } from '../app/CounterSlice/Index'

function Counter() {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // console.log(count);

    return (
        <>
            <h3>Counter Value: {count} </h3>
            <button onClick={() => dispatch(increaseBy1())}>+1</button>
            <button onClick={() => dispatch(increaseBy10())}>+10</button>
            <button onClick={() => dispatch(decreaseBy1())}>-1</button>
            <button onClick={() => dispatch(decreaseBy10())}>-10</button>
            <br />
            <button onClick={() => dispatch(increaseByValue(100))}>+ By Value</button>

        </>
    )
}

export default Counter