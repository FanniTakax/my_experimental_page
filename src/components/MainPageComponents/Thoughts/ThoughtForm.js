import React, { useState, useEffect } from 'react';
import database from '../../../firebase/firebase';

const ThoughtForm = () => {

    const [state, setState] = useState({
        thought: '',
        name: ''
    })

    const addThought = (thought, name) => {
        database.ref('thoughts').push({
            thought: thought,
            name: name
        })
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addThought(state.thought, state.name);
        setState({
            thought: '',
            name: ''
        });
    }
    

    return (
        <form className="thought-form" onSubmit={handleSubmit}>
            <label htmlFor="thought">Write a thought and leave it here to inspire us: </label>
            <textarea name="thought" value={state.thought} onChange={handleChange} placeholder="Write here a thought" rows="7" cols="40" required></textarea>
            <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Your name" />
            <button type="submit">Add Thought</button>
        </form>
    )
}

export default ThoughtForm;