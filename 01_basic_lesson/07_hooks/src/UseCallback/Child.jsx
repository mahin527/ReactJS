import React, { useEffect } from 'react'

function Child({ handleChange, counter1 }) {
    useEffect(() => {
        console.log('Child component is rendering');
    }, [handleChange])

    return (
        <>
            <h3>Child File</h3>
            <h4>Counter at Child: {counter1} </h4>
            <button onClick={handleChange}>Increase Child Counter</button>

        </>
    )
}

export default Child