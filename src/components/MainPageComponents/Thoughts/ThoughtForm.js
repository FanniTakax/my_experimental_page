import React from 'react';


const ThoughtForm = (props) => {
    return (
        <form className="thought-form" onSubmit={props.handleFormSubmit}>
            <label htmlFor="thought">Write a thought and leave it here to inspire us: </label>
            <textarea name="thought" value={props.thought.thought} onChange={props.handleFormChange} placeholder="Write here a thought" rows="7" cols="40" required></textarea>
            <input type="text" name="name" value={props.thought.name} onChange={props.handleFormChange} placeholder="Your name" />
            <button type="submit">Add Thought</button>
        </form>
    )
}

export default ThoughtForm;