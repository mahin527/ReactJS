import { useEffect, useState } from "react"

function FetchDataLearn() {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                const data = await api.json()
                setApiData(data)
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <h3>
                FetchDataLearn
            </h3>
            {apiData.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.id}. {todo.title}</p>
                </div>
            ))}

            {/* 
                {apiData.slice(0, 10).map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.id}. {todo.title}</p>
                    </div>
                ))}
            */}
        </>
    )
}

export default FetchDataLearn