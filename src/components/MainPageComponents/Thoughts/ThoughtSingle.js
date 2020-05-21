import React from 'react';

const ThoughtSingle = (props) => {
    return (
     <li className="thought-single" key={props.key}>
        <p className="thought-single-p">{props.thought}</p>
        <span className="thought-single-span">{props.name}</span>
    </li>
    )
}

export default ThoughtSingle;