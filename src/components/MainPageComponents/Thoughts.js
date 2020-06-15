import React, { useState, useEffect } from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import database from '../../firebase/firebase';
import ThoughtSingle from './Thoughts/ThoughtSingle';
import _ from 'lodash';

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
                        array.push({id: thought.key,...thought.val()})
                        console.log('pushing')
                    })
                    setPushed(true)
                } else {
                    array.push({id: '000', name: 'Fanni', thought: 'Couldn\'t load thoughts...'})
                }
            })   
        return array   
    }

    const [thoughtsArray, setThoughtsArray] = useState(getThoughtsArray())
    
    console.log('new render')

    const watchAddThoughts = () => {
        database.ref('thoughts').on('value', (dataSnapshot, prevChildKey) => {
            setThoughtsArray([...thoughtsArray, {id: dataSnapshot.key,...dataSnapshot.val()}])
        })
    }


    useEffect(() => {
        console.log('useEffect on thoughtsArray change')
    }, [thoughtsArray])


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
            <p className="p-center" >Inspire and get inspired</p>
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