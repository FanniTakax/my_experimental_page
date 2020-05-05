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

   
        /*let arrayOfThoughts = []
        arrayOfThoughts = database.ref('thoughts').on('value', (snapshot) => {
            const data = snapshot.val()
            let array = []
            _.map(data, item => {
                //console.log(`id: ${item.key}, name: ${item.name}, thought: ${item.thought} ...... `)
                array.push(<ThoughtSingle name={'Fannno'} thought={'keep on keep on keep on loving loving'} />)
                
            })
            return array
        })*/
    

    

// thoughtsArray.map((item) => {return <ThoughtSingle key={item.id} name={item.name} thought={item.thought} />})
    
    

    return (
        <div className="thoughts">
            <ThoughtForm thought={thought} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            <ol className='thoughts-list'>
                <ThoughtSingle id={1} name={'Fannno'} thought={'keep on keep on keep on loving loving'} />
            </ol>
            
        </div>
    );
}

export default Thoughts;