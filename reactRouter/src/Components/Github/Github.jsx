import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    console.log('data', data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Suman-N')
    //         .then(response => response.json())
    //         .then(data => {

    //             setData(data)
    //             console.log(data);
    //         })
    // }, [])

    return (
        <>
            <div className='justify-center flex m-2 p-4'>
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
            <div className='text-center text-xl text-orange-700 hover:underline'>{data.bio}</div>
            {/* <div className='text-center text-xl'>{data.id}</div> */}
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Suman-N')
    return response.json()
}