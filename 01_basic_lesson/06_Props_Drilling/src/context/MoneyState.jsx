import { useState } from "react"
import MyContext from "./Mycontext"

function MoneyState(props) {
    const money = 1000
    const name = 'Mahin'
    const [counter, setCounter] = useState(0)
    return (
        <>
            <MyContext.Provider value={{ money, name, counter, setCounter }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export default MoneyState