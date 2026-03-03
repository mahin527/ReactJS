import { useEffect, useState } from "react"
import { data, Link, useLoaderData } from "react-router-dom"

function Github() {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mahin527')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()
    return (
        <>
            <div className="bg-linear-to-t to-gray-200 from-gray-900 flex justify-center items-center min-h-screen">
                <div className="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-100 p-8 text-center">
                    <img src={data.avatar_url} className="rounded-full mx-auto w-20 h-20 border-4 border-white/70" />

                    <h3 className="font-bold mt-6">{data.name}</h3>
                    <p className="flex items-center justify-center gap-1 text-sm">
                        {data.bio}
                    </p>
                    {/* <p className="flex items-center justify-center gap-1 text-sm">
                        Location: {data.location}
                    </p> */}
                    <p className="flex items-center justify-center gap-1 text-sm">
                        Followers: {data.followers}
                    </p>
                    <p className="flex items-center justify-center gap-1 text-sm">
                        Following: {data.following}
                    </p>

                    <Link to={data.html_url} className="block mt-4 cursor-pointer rounded-full p-2 px-3 bg-gray-800 text-white">View Github</Link>
                </div>
            </div>

        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mahin527')
    return response.json()
}