// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { PostReq } from "./Components/PostReq";

const App = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [inputText, setInputText] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(res => res.json())
      .then(data => setMoviesArray(data))
  }, [moviesArray]);

  const states = {
    moviesArray,
    setMoviesArray,
    newMovie,
    setNewMovie,
    inputText,
    setInputText,
    searchList,
    setSearchList
  };

  return (
    <AppContext.Provider value={states}>
      <Navbar />
      <PostReq/>
      <MovieList />
      
    </AppContext.Provider>
  );
}

export default App;

