import React from 'react'

const Login = () => {
    return (
        <div className="login-form">
            <form>
                <div className="email-or-phone">
                    <input type="text" placeholder="Email or Phone Number" />
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="submit-btn">
                    <button type="submit">Log In</button>
                </div>
            </form>
            <p className="forgot-password">
                <a href="https://google.com">Forgot Password?</a>
            </p>
        </div>
    )
}

export default Login
