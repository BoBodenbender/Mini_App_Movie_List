import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { PostReq } from "./PostReq"

export const Navbar = () => {
  const {moviesArray, setSearchList, inputText, setInputText } = useContext(AppContext)
  
  useEffect(() => {
    let filteredList = moviesArray.filter((movie) => {
      if (inputText === "") {
        return true;
      } else if (movie.title === null) {
        return false;
      } else {
        return movie.title.toLowerCase().includes(inputText);
      }
    })
    setSearchList(filteredList);

  }, [inputText])

  let inputHandler = (e) => {
    const lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  }

    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">MOVIE LIST</a>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputHandler}></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}