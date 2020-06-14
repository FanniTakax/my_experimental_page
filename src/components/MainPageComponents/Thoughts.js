import React, { useState, useEffect } from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import database from '../../firebase/firebase';
import ThoughtSingle from './Thoughts/ThoughtSingle';
import _ from 'lodash';

const Thoughts = () => {
    
    const [thoughtsArray, setThoughtsArray] = useState([])

    // Get thoughts data from database
    const getThoughtsArray = () => {
        const array = []
        database.ref('thoughts')
            .once('value')
            .then((dataSnapshot) => { 
                dataSnapshot.forEach((thought) => {
                    array.push({id: thought.key,...thought.val()})
                })
            })
        setThoughtsArray(array)    
    }


    // ha a getThoughtsArray()-bol returnelt array nem ures, akkor setThoughtsArray(getThoughtsArray()) ---------- hol tegyem fel ezt a kerdest?
    useEffect(() => {
        getThoughtsArray()
    }, [])
        
    console.log(thoughtsArray)
    // props sent to ThoughtsForm ------------------------------------------------------------------------
    const [thought, setThought] = useState({
        thought: '',
        name: ''
    })
    const addThought = (thought, name) => {
        database.ref('thoughts').push({
            thought: thought,
            name: name
        })
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
            <p className="p-center" >// ... working on the implementation ... //</p>
            <p className="p-center"><small>If you leave a thought now, it will be saved in a database. They will be visible here soon.</small></p>
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