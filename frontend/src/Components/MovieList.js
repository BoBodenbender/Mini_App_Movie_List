import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { AppContext } from "../AppContext";


export const MovieList = () => {
    const { moviesArray, searchList } = useContext(AppContext)
    return (
        <div className='listDiv'>
        <ol className="list-group list-group-numbered">
          {moviesArray.map((movie, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-start list-group-border-width 70vw" key={movie.index}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold"> {movie.title} </div>
                  Year Released:
                </div>
                <span className="badge bg-primary rounded-pill">{movie.index}</span>
              </li>
            )
          })}
        </ol>
      </div>
    )
}