import React, { useState, useEffect } from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import database from '../../firebase/firebase';
import ThoughtSingle from './Thoughts/ThoughtSingle';
import _ from 'lodash';

const Thoughts = () => {
    
     
    // Get thoughts data from database
    const getThoughtsArray = () => {
        let array = []
        database.ref('thoughts')
            .once('value')
            .then((dataSnapshot) => { 
                dataSnapshot.forEach((thought) => {
                    array.push({
                        id: thought.key,
                        ...thought.val()
                    })
                })
            })   
        return array
    }
    
    const [thoughtsArray, setThoughtsArray] = useState(getThoughtsArray)

    // After first render, load thought objects from the database
    useEffect(() => {
        console.log({thoughtsArray})    
        console.log(thoughtsArray)
    }, [])
    

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

    
    const tibidubu = [
        {id: '1', name: 'Lalika', thought: 'vlami valahol valamikor'},
        {id: '2', name: 'Barbie', thought: 'where are my shoes'},
        {id: '3', name: 'Geza', thought: 'fekete bika pata kopog a patika epita koven'},
        {id: '4', name: 'Simonka a cica', thought: 'Prrrrr prrp prrrr prrr grrrrr meeeeeooooooowwwwww wwwweeeeeiiii prrrrrr prrrrr'}
    ]
    console.log({tibidubu})

    return (
        <div className="thoughts main-page-content">
            <p>Write a thought. Any Thought. To inspire each other.</p>
            <p>( ... working on the implementation ... )</p>
            <ThoughtForm thought={thought} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            <ul className='thoughts-list'>
                {
                    tibidubu.map((item) => {
                        return <ThoughtSingle key={item.id} name={item.name} thought={item.thought} />
                    })
                }
            </ul>
            
        </div>
    );
}

export default Thoughts;