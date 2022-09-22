const express = require("express");
const cors = require("cors");
const app = express();
const knex = require("knex")(
    require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
    knex
    .select('*')
    .from('movie_list')
    .then(data => res.send(data))
    .catch(err => res.status(404).json({
        message: 'The data you are looking for could not be found.'
    }))
})

app.post('/movies', (req, res) => {
    knex('movie_list').insert(req.body)
    .then(data => res.send({message: 'Your movie has been added.'}))
    .catch(err => res.status(404).json({
        message: 'The data you are looking for could not be found.'
    }))
})

app.patch('/movies:id', (req, res) => {
    const { id } = req.params
    knex('movie_list')
    .where({id: id})
    .update(req.body)
    .then(data => res.send({message: 'Your movie has been added.'}))
    .catch(err => res.status(404).json({
        message: 'The data you are looking for could not be found.'
    }))
})

app.listen(port, () => {console.log(`The server is listening on port ${port}`)})