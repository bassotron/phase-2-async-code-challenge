import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard(props) {
  const [comments, setComments] = useState([])
  return (

    <div>
      <h3>{props.title} 
      </h3>
      <p>{props.genre}</p>
      <p>
        <strong>
          {props.description}</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
    
  );
}

export default MovieCard;