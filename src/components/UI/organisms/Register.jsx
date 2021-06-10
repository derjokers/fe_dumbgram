import React from 'react';
import ColorfulButtonBig from '../atoms/ColorfulButtonBig';
import '../../../styles/UI/Register.css';

function Register(props) {
    return (
        <div className="register">
            <h1 className="titleRegister">Register</h1>
            <form >
                <input className="email" type="text" name="email" placeholder="Email" />
                <br />
                <input className="name" type="text" name="name" placeholder="Name" />
                <br />
                <input className="username" type="text" name="username" placeholder="Username" />
                <br />
                <input className="password" type="password" name="password" placeholder="Password" />
                <br />
            </form>
            <ColorfulButtonBig button="Register" />
            <p className="clickLogin">Already have an account ? Click <span>Here</span></p>
        </div>
    );
}

export default Register;