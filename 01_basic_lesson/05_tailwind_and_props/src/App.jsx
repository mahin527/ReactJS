import './App.css'
import Card from './components/Card'

function App() {
const userInfo = {
  name: 'Mahin',
  age: 22
}

let myArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg'>React Lesson: Tailwind and Props</h1>
      <Card title='Green Line' btnText='View More' />
      <Card title='Long Life' btnText='Read More' />

    </>
  )
}

export default App
