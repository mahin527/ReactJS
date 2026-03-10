import { useState, useEffect } from "react"
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
    }).catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <>
      <div>
        <h1>React is Successfully Running</h1>
        <br />
        <h2>Jokes: {jokes.length}</h2>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
