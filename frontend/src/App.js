import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [moviesArray, setMoviesArray] = useState([
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ]);

  useEffect(() => {

  }, []);

  const value = {
    moviesArray,
    setMoviesArray
  };

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">MOVIE LIST</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className='listDiv'>
        <ol className="list-group list-group-numbered">
          {moviesArray.map((movie, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-start list-group-border-width 70vw" key={movie.index}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold"> {movie.title} </div>
                  Content for list item
                </div>
                <span className="badge bg-primary rounded-pill">{movie.index}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  );
}

export default App;

