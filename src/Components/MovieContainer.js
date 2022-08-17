import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";
import { Link } from 'react-router-dom'

function MovieContainer({ displayMovie, movieState  }) {
  
  
    
  

  
  
  return (
    <div>
     <Link to={"/"}>Home</Link><br></br>
    <Link to={"/movies"}>New Movies</Link>
      <h1>Watchlist</h1> 
    
      
      <Search displayMovie={displayMovie} movieState={movieState} />
    
      
      
      <Filter displayMovie={displayMovie} movieState={movieState}   />
      {displayMovie.map((movie) => (
        <MovieCard  key={movie.id} title={movie.title} description={movie.description} genre={movie.genre} />
      ))}
      
      
    </div>
  );
}

export default MovieContainer;
