import React, { useState } from "react"
import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password", password)
    //Authentication logic
    //Oauth? or local?
    //Will need for creation too
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                placeholder="Email.Here@example.com"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                required />
            </div>
            <div>
                <label htmlFor="password">Email</label>
                <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                required />
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
)

export default SignIn