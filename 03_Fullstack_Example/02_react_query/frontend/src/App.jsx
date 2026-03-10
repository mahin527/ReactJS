import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  // const [products, error, loading] = customReactQuery('/api/products')

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
      ; (async () => {
        try {
          setLoading(true)
          setError(false)

          const response = await axios.get('/api/products?search=' + search, {
            signal: controller.signal
          })
          console.log(response.data);
          setProducts(response.data)
          setLoading(false)
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Requested canceled', error.message);
            return
          }
          console.error('Error::', error);
          setError(true)
          setLoading(false)
        }
      })()

    return () => {
      // cleanup code
      controller.abort()
    }
  }, [search])


  // if (error) {
  //   return <h3>Something went wrong...</h3>
  // }

  // if (loading) {
  //   return <h3><br />Loading...</h3>
  // }

  return (
    <>
      <h1>
        React is running...
      </h1><br />
      <input type="text" placeholder="Search: " value={search} onChange={(e) => setSearch(e.target.value)} />
      {loading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong...</h3>}
      <h3>Number of products are: {products.length}</h3>


    </>
  )
}

export default App;

const customReactQuery = (apiPath) => {
  // const [loading, setLoading] = useState(false)
  // const [products, setProducts] = useState([])
  // const [error, setError] = useState(false)
  // useEffect(() => {
  //   ; (async () => {
  //     try {
  //       setLoading(true)
  //       setError(false)
  //       const response = await axios.get(apiPath)
  //       console.log(response.data);
  //       setProducts(response.data)
  //       setLoading(false)
  //     } catch (error) {
  //       console.error('Error::', error);
  //       setError(true)
  //       setLoading(false)
  //     }
  //   })()
  // }, [])

  return [products, error, loading]
}


