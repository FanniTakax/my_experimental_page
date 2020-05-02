import React, { useState, useEffect } from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import database from '../../firebase/firebase';
import ThoughtSingle from './Thoughts/ThoughtSingle';

const Thoughts = () => {
      // Get thoughts data from database
      const getThoughtsArray = () => {
        const array = []
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

    const [thoughtsArray, setThoughtsArray] = useState(getThoughtsArray())

    // After first render, load thought objects from the database
    useEffect(() => {
        console.log(thoughtsArray)       
    }, [])


    // props sent to ThoughtsForm
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

    
    

    return (
        <div className="thoughts">
            <ThoughtForm thought={thought} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            <ThoughtSingle thoughtsArray={thoughtsArray} />
        </div>
    );
}

export default Thoughts;