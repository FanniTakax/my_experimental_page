import React, { useState } from 'react';

const Movies = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (e) => {
        e.preventDefault()


        const url = `https://api.themoviedb.org/3/search/movie?api_key=13b13773c8e40b0f6d3c622048ceeef6&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setMovies(data.results)
        } catch (err) {
            console.log(err)
        }

    }

    const inputChangeHandler = (e) => {
        setQuery(e.target.value);
    } 

    return (
        <div className="movies main-page-content">
            <h1>Search Movies</h1>
            <form className="movies-form" onSubmit={searchMovies}>
                <label htmlFor="query" className="movies-label">Movie title or keyword</label>
                <input className="input movies-input" type="text" name="query" value={query} onChange={inputChangeHandler} placeholder="i. e. Chocolate" required></input>
                <button className="button" type="submit">SEARCH</button>
            </form>
            
            <div className="movie-card-list">
                {movies.length === 0 ? <p>No movies found yet...</p> : movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <h4 className="movie-card-title">{movie.title}</h4>
                        <img className="movie-card-img" 
                              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                              alt={movie.title + ' poster'}
                              />
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="description">{movie.overview}</p>
     
                    </div>
                ))}
            </div>
            <p>Using <a href="https://www.themoviedb.org">https://www.themoviedb.org</a> API</p>
        </div>
    )
}

export default Movies
