import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";



function App() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
        
    .then(data => setMovie(data))
    
  },[])


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieContainer displayMovie={movie} movieState={setMovie} />}/>
        <Route path="/movies/new" element={<MovieForm movieState={setMovie} />}/>
       
      </Routes>
      
    </div>
  );
}

export default App;