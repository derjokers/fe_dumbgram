import React from 'react';

function Photos(props) {
    return (
        <img src={props.image} style={{marginBottom: "10px"}} />
    );
}

export default Photos;