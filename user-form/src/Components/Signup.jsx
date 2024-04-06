import React, { useState } from 'react'
import UserDetails from './UserDetails'

function Signup() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [showComponent, setShowComponent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowComponent(true)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type='submit'> Sign Up</button>
                {showComponent && <UserDetails name={username} password={password} email={email} />}
            </form>
        </div>
    )
}

export default Signup;