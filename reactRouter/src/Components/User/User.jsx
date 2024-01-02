import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-blue-200 text-black p-4 text-center'>User: {userid}</div>
    )
}

export default User