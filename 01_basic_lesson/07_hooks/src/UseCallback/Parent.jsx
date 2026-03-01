import { useState, useCallback } from 'react'
import Child from './Child'

function Parent() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // const handleChange = () => setCounter1(counter1 + 1)

  const handleChange = useCallback(() => {
    setCounter1(counter1 + 1)
  },
    [counter1],
  )


  return (
    <>
      <h3>
        Parent File
      </h3>
      <h4>Counter at Parent: {counter2}</h4>
      <button onClick={() => setCounter2(counter2 + 1)}>Increase Parent Counter</button>
      <Child handleChange={handleChange} counter1={counter1} />
    </>
  )
}

export default Parent