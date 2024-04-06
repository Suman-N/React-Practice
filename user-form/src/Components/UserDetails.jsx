import React from 'react'

function UserDetails({ name, password, email }) {
    return (
        <div>
            <h4>User Signed in Successfully</h4>
            <div>
                <p>UserName: {name}</p>
                <p>Password: {password}</p>
                <p>EmailId: {email}</p>
            </div>
        </div>
    )
}

export default UserDetails;