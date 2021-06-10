import React from 'react';
import ColorfulButton from '../atoms/ColorfulButton';
import '../../../styles/UI/LoginAndReg.css';


function LoginAndReg(props) {
    return (
        <div className="loginReg">
            <ColorfulButton button="Login"/> 
            <a className="clickReg">Register</a>
        </div>
    );
}

export default LoginAndReg;