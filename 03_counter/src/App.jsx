import { useState } from 'react'
import './App.css'

function App() {

  let [countNum, setCountNum] = useState(5)

  // let countNum = 5

  const addNumber = () => {
    // console.log(countNum);
    if (countNum < 22) {
      countNum = countNum + 1
    }
    setCountNum(countNum)
  }

  const removeNumber = () => {
    if (countNum > 0) {
      countNum = countNum - 1
    }
    setCountNum(countNum)
  }
  return (
    <>
      <h1>React Lesson: Counter Project</h1>

      <h2>Counter Value: {countNum} </h2>
      <button onClick={addNumber}>Add value</button>
      <br /><br />
      <button onClick={removeNumber}>Remove value {countNum}</button>
      <p>Footer: {countNum}</p>
    </>
  )
}

export default App
