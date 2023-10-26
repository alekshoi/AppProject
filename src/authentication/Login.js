import React, { useState } from 'react'
import "./Login.css"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

import booksterLogo from './bookster-black-background.png'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
    }
    return (
        <div className='login'>
            <img src={booksterLogo} alt="" />
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
}

export default Login