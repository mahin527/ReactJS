import { useContext } from "react";
import myContext from "../context/Mycontext"

const People = () => {
// const People = ({ money }) => {
    // console.log('useContext', useContext(myContext));
    // const data = useContext(myContext)
    const { name, money, counter, setCounter } = useContext(myContext)
    return (
        <div>
            {/* <h3>Welcome to People Component</h3>
            <h4>Here is your money: {money}</h4>
            <p>now, this is your api context data</p>
            <p>Name: {data.name}</p>
            <p>Money: {data.money}</p>
            <p>Counter: {data.counter}</p> */}
            <p>now, this is your api context data</p>
            <p>Name: {name}</p>
            <p>Money: {money}</p>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    )
}

export default People