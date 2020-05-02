import React/*, { useState, useEffect }*/ from 'react';

const ThoughtSingle = (props) => {
    console.log(props.thoughtsArray)
    const array = props.thoughtsArray
    console.log(array)
    /*const list = props.thoughtsArray.map((item) => {
        return <li> {item.name} </li>;
    })*/

    const list = array.map((item) => <li>hello</li>)

    return (
     <ul className="thoughts-render">
        {list}
     </ul>
    )
}

/*<li key={thought.id}><span>{thought.thought}</span><span>{thought.name}</span></li>)*/

export default ThoughtSingle;