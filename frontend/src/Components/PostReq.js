import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import '../App.css';

export const PostReq = () => {
    const { newMovie, setNewMovie } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newMovie)

        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json" },
            body: JSON.stringify({title: newMovie})
        }).then(() => {
            console.log('new movie')
        })
    }

    return (
        <div className='create'>
            <h2>Add A New Movie</h2>
            <form onSubmit={handleSubmit}>
            <label>Movie Title:</label>
            <br/>
            <input 
                className="form-control me-2" 
                type="text" 
                placeholder="Movie Title" 
                aria-label="Search"
                // type='text'
                required
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
            />
            </form>
            {/* <button type="button" class="btn btn-info" onClick={() => }>Add Movie</button> */}
        </div>
    )
}