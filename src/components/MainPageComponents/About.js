import React from 'react';
import mimi_and_fanni from '../../img/mimi_and_fanni.jpg'

const About = () => {
    return (
        <div className="main-page-content about">
            <p>I am ...
            </p>
            <p>This experimental website is being created with the aim of using in 
            practice all the different parts I am constantly learning on my journey in web development.
            It is a blueprint of my knowledge. My journey in web development goes towards being able
            to participate in projects that create value, to connect dots, to gain and share knowledge.
            </p>
            <p>This is a simple React website. ...
            </p>
            <img className="img-mimi" src={mimi_and_fanni} alt="Mimi and Me" />
        </div>
    );
}

export default About;
