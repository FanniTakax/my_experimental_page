import React from 'react'

const MovieCard = (props) => {
    return (
        <div className="movie-card" key={props.movie.id}>
            <h4 className="movie-card-title">{props.movie.title}</h4>
            <img className="movie-card-img" 
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} 
                    alt={props.movie.title + ' poster'}
                    />
            <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
            <p><small>RATING: {props.movie.vote_average}</small></p>
            <p className="description">{props.movie.overview}</p>
        </div>
    )
    
}

export default MovieCard
