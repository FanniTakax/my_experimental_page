import React from 'react';
import Button from './Button';

import { useHistory } from 'react-router-dom';

const NoMatch = () => {
    const history = useHistory();

    return (
        <div className='no-match'>
            <p>Path not found.</p>
            <Button buttonName={'Back to Home!'} onClick={() => history.push('/home')}/>
        </div>
        
    )
}

export default NoMatch;