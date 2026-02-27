import Coffee from "./components/Coffee"
import Items from "./components/Items"
import Product from "./components/Product"
function App() {
  // const user = {
  //   username: 'Mahin',
  //   age: 22
  // }

  const info = {
    ram: '8gb',
    rom: '116gb',
    chip: 'Intel i - 8'
  }

  return (
    <>
    <Items />
      <Product name='Samsung Galaxy S21' price={15000} color='Black' data={info} />
      <Product name='Lenovo V40' price={5000} color='Blue' />
      <Product name='Itel A600' price={2100} color='Silver' data={info} />

      {/* <Coffee />
      {/* <h2>My name is {user.username}</h2>
      <h3>And i am {user.age} years old</h3>
      <p>Thank you dear!</p>
      <span>You are welcome!</span> */}
    </>
  )
}

export default App
