import React from 'react';

const Movies = () => {
    
    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting')
    }

    return (
        <div className="movies main-page-content">
            <h1>Movies Coming Here</h1>
            <form className="movies-form" onSubmit={searchMovies}>
                <label htmlFor="query" className="movies-label">Movie Title</label>
                <input className="input movies-input" type="text" name="query" placeholder="i. e. Chocolate"></input>
                <button className="button" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

export default Movies
