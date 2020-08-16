import React from 'react'
import '../../../css/entrySignup.css'

const Signup = () => {
    return (
        <div className="signup-form">
            <div className="signup-form-header">
                <h1>Create a New Account</h1>
                <p>It's quick and easy</p>
            </div>
            <form>
                <div className="first-last-name">
                    <div className="first-name">
                        <input type="text" placeholder="First name" />
                    </div>
                    <div className="last-name">
                        <input type="text" placeholder="Last name" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup
