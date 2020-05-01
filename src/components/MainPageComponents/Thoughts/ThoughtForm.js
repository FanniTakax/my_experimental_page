import React, { useState, useEffect } from 'react';

const ThoughtForm = () => {
    return (
        /*<form>
            <input type="text" value={state.thought} name="thought" onChange={handleChange }  required/> <br/>
            <button type="submit">Add Thought</button>
        </form>*/

        <div className="thought-form">
            <label for="thought">Write a thought and leave it here to inspire us: </label>
            <textarea name="thought" placeholder="Write here a thought" rows="7" cols="40" required></textarea>
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Add Thought</button>
        </div>
    )
}

export default ThoughtForm;