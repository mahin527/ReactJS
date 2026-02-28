import { Link } from "react-router-dom"

function User() {
    const userInfo = [
        { id: 1, name: 'Mahin', age: 22 },
        { id: 2, name: 'Hasan', age: 26 },
        { id: 3, name: 'Romjan', age: 29 },
    ]
    return (
        <>
            {userInfo.map((data) => <div key={data.id}>
                <Link to={`/user/${data.id}`}>{data.name}</Link>
            </div>)}
        </>
    )
}

export default User