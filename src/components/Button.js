import React from 'react';

const Button = (props) => {

    return (
        <button type="button" onClick={props.onClick}>{props.buttonName}</button>
    )
}

export default Button