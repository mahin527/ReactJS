import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <>
    <h4 className="text-center py-12 text-2xl font-bold bg-neutral-300 ">User: {userid}</h4>
    </>
  )
}

export default User