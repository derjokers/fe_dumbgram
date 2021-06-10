import React from 'react';
import '../../../styles/UI/ColorfulButtonBig.css';

function ColorfulButtonBig(props) {
    return (
        <div>
            <button className="colorfulButtonBig" >{props.button}</button>
        </div>
    );
}

export default ColorfulButtonBig;