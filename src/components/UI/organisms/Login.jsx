import React from 'react';
import ColorfulButtonBig from '../atoms/ColorfulButtonBig';
import '../../../styles/UI/Login.css';

function Login(props) {
    return (
        <div className="login">
            <h1 className="titleLogin">Login</h1>
            <form >
                <input className="email" type="text" name="email" placeholder="Email" />
                <br />
                <input className="password" type="password" name="password" placeholder="Password" />
                <br />
            </form>
            <ColorfulButtonBig button="Login" />
            <p className="clickRegister">Already have an account ? Click <span>Here</span></p>
        </div>
    );
}

export default Login;