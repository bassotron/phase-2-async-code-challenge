import React from 'react'

function Search({ displayMovie, movieState}) {
  

  const searchMovies = event => {
    const value = event.target.value.toLowerCase();
    const searchedMovies = displayMovie.filter(movie => (`${movie.title}`.toLowerCase().includes(value)));
    movieState(searchedMovies)
  }

  return (
    <div>
        <input type="text" onInput={searchMovies}  placeholder="Search for movie by title" style={{width: '250px'}}/>
    </div>
  )
}

export default Search;
