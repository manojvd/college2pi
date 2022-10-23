import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="Login">
            <h2>__Login__</h2><br/><br/>
            <form>
                <label for="fname">User Id:</label><br />
                <input type="text" id="userid" name="userid" style={{width:"50%"}} required /><br />
                <label for="lname">Password:</label><br />
                <input type="password" id="pwd" name="pwd" style={{width:"50%"}} required /><br/> <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
