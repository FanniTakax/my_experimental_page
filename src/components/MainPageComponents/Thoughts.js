import React  from 'react';
import ThoughtForm from './Thoughts/ThoughtForm';
import ThoughtsRender from './Thoughts/ThoughtsRender';

const Thoughts = () => {
    return (
        <div className="thoughts">
            <ThoughtForm />
            <ThoughtsRender />
        </div>
    );
}

export default Thoughts;