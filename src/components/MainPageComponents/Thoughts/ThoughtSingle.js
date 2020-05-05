import React/*, { useState, useEffect }*/ from 'react';

const ThoughtSingle = (props) => {
    return (
     <li key={props.id}><p>{props.thought}</p><span>{props.name}</span></li>
    )
}

export default ThoughtSingle;