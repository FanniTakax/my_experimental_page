import React from 'react';


const ThoughtForm = (props) => {
    return (
        <form className="thought-form" onSubmit={props.handleFormSubmit}>
            
            <textarea className="textarea" name="thought" value={props.thought.thought} onChange={props.handleFormChange} placeholder="Write here a thought" rows="7" cols="10" required></textarea>
            <div className="thought-form-div">
                <input className="input thoughts-input" type="text" name="name" value={props.thought.name} onChange={props.handleFormChange} placeholder="Your name"  required/>
                <button type="submit">Add Thought</button>
            </div>
        </form>
    )
}

export default ThoughtForm;