import { useState } from "react";

function UseStateLern() {
    // let count = 0;
    let [count, setCount] = useState(0)
    const increase = () => {
        // count ++
        // console.log(count);
        // if (count < 20) {
        //     count = count + 1
        // }
        // setCount(count)
        setCount((prev) => prev + 1)

    }

    const decrease = () => {
        // count --
        // console.log(count);
        // if (count > 0) {
        //     count = count - 1
        // }
        // setCount(count)
        setCount((prev) => prev - 1)
    }

    return (
        <>
            <div>
                <h1>
                    useState Hook
                </h1>
                <h4>Count: {count}</h4>
                <div style={{ display: 'grid', gap: '6px' }}>
                    <button onClick={increase}>Increase</button>
                    <button onClick={decrease}>Decrease</button>
                </div>

            </div>
        </>
    )
}

export default UseStateLern