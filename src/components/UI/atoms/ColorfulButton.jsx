import React from 'react';
import '../../../styles/UI/ColorfulButton.css';

function ColorfulButton(props) {
    return (
        <button className="colorfulButton" >{props.button}</button>
    );
}

export default ColorfulButton;