import React from 'react'

function Filter({displayMovie, movieState } ) {

  const filterMovies = event => {
    const value = event.target.value;
    const filteredMovies = displayMovie.filter(movie => (`${movie.genre}`.includes(value)));
    movieState(filteredMovies)
  }
  return (
    <div>
        <select onChange={filterMovies}>
            <option value="" selected>All</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Drama</option>
            <option>Comedy</option>
        </select>
    </div>
  )
}

export default Filter;
