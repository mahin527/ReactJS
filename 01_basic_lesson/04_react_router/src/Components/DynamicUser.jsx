import { useLocation, useNavigate, useParams } from "react-router-dom"

function DynamicUser() {
  const { slug } = useParams();
  const userInfo = [
    { id: 1, name: 'Mahin', age: 22 },
    { id: 2, name: 'Hasan', age: 26 },
    { id: 3, name: 'Romjan', age: 29 },
  ]
  // const specificUser = userInfo.filter(data => data.id == slug)
  const specificUser = userInfo.find(data => data.id == slug)
  // console.log(specificUser);
  // console.log(useLocation());
  const location = useLocation()
  const navigateToHome = useNavigate()
  return (
    <>
      <h4>Name: {specificUser.name}</h4>
      <h4>Age: {specificUser.age}</h4>
      {location.pathname === '/user/1' && <div><h5>Hello {specificUser.name}</h5></div>}
    
    <button onClick={()=>navigateToHome('/')}>Go To Home</button>
    </>
  )
}

export default DynamicUser