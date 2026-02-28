import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import User from './Pages/User'
import DynamicUser from './Components/DynamicUser'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<User />} />
          <Route path='/user/:slug' element={<DynamicUser />} />
          <Route path='*' element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App