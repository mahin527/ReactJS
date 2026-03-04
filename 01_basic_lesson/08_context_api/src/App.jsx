import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>React Lesson</h1>
      <h3>Context API</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
