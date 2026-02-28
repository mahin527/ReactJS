import { useEffect, useState } from "react"
function UseEffectLearn() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('useEffect is running...');
        document.title = counter

    }, [counter])

    return (
        <>
            <div>
                <h3>
                    UseEffectLearn
                </h3>

                <h5>Counter: {counter}</h5>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            </div>
        </>
    )
}

export default UseEffectLearn