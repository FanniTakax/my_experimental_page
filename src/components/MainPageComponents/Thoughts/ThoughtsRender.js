import React, { useState, useEffect } from 'react';
import ThoughtSingle from './ThoughtSingle';

// forEach data in the database we generate a single thought

const ThoughtsRender = () => {
    return (
     <div>
        <ThoughtSingle />
        
     </div>
    )
}

export default ThoughtsRender;