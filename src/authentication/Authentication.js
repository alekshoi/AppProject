import React, { useState } from 'react'
import "./Authentication.css"
import Login from "./Login"
import Signup from "./Signup"

function Authentication() {
    const [active, setActive] = useState("login")

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login")
    }

    return (
        <div className='authentication'>
            <div className='auth__left'>
                <img src="https://i.pinimg.com/originals/c6/13/1e/c6131e0206d37d4f4146d53c6e3d16f3.jpg" alt="" />
            </div>
            <div className='auth__right'>
                {active === "login" ? (<Login />) : (<Signup />)}

                <div className='auth__more'>
                    <span>
                        {active === "login" ?
                            (<>Don't have an account?<button onClick={handleChange}>Sign up</button></>)
                            :
                            (<>Have an account?<button onClick={handleChange}>Login</button></>)
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Authentication
