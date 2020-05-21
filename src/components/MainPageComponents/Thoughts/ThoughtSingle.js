import React from 'react';

const ThoughtSingle = (props) => {
    return (
     <li key={props.key}><p>{props.thought}</p><span>{props.name}</span></li>
    )
}

export default ThoughtSingle;