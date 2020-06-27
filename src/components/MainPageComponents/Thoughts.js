import React, { useState, useEffect } from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import database from '../../firebase/firebase';
import ThoughtSingle from './Thoughts/ThoughtSingle';

import leaves from '../../img/leaf.jpg'

const Thoughts = () => {
    
    const [pushed, setPushed] = useState(false)

    // Get thoughts data from database
    const getThoughtsArray = () => {
        const array = []
        database.ref('thoughts')
            .once('value')
            .then(dataSnapshot => { 
                if(dataSnapshot) {
                    dataSnapshot.forEach((thought) => {
                        array.unshift({id: thought.key,...thought.val()})
                    })
                    setPushed(!pushed)
                } else {
                    array.push({id: '000', name: 'Fanni', thought: 'Couldn\'t load thoughts...'})
                }
            })   
        return array   
    }

    const [thoughtsArray, setThoughtsArray] = useState(getThoughtsArray())
   // const [newThoughtAdded,  setNewThughtAdded] = useState(false)

    // NEXT STEP to be implemented. so any time the form is submitted, the newly added thoughts automatically renders at the end of the list of thoughts
    const watchAddThoughts = () => {
       
    }


    // props sent to ThoughtsForm ------------------------------------------------------------------------
    const [thought, setThought] = useState({
        thought: '',
        name: ''
    })
    const addThought = (thought, name) => {
        database.ref('thoughts').push({
            thought,
            name
        })
        setThoughtsArray([{thought, name, id: 'key_temporal'}, ...thoughtsArray])
        console.log(thoughtsArray)
        setPushed(!pushed)
    }
    const handleFormChange = (e) => {
        setThought({...thought, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addThought(thought.thought, thought.name);
        setThought({
            thought: '',
            name: ''
        });
    }
    // ---------------------------------------------------------------------------------------------------------


    return (
        <div className="thoughts main-page-content">
            <p className="p-center">You can leave a thought here</p>
            <p className="p-center" >Inspire and get inspired</p>
            <img className="img-leaves" src={leaves} />
            <ThoughtForm thought={thought} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            <ul className='thoughts-list'>
                {
                    thoughtsArray.map((thought) => {
                        return <ThoughtSingle key={thought.id} name={thought.name} thought={thought.thought} />
                    })
                }
            </ul>
            
        </div>
    );
}

export default Thoughts;

/* 
    const [show, setShow] = useState(false);

    return (
        <div>
        <button onClick={() => setShow(!show)}>Show Menu</button>
        // Mounted with show = true and unomunted with show = false
        {show && <MenuDropdown />}
        </div>
    );
*/



