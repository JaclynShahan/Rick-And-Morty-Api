const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const cors = require('cors');

app = express();
app.use(bodyParser.json());
app.use(cors());

let favorites = [];

app.get('/api/test', (req, res) => {
    res.status(200).send({message: 'it works'})
})

app.get('/api/characterSearch', (req, res) => {
   console.log(req.query) // console log the req.query object
   axios.get(`https://rickandmortyapi.com/api/character?name=${req.query.name}`)
   .then((resp) => {
       console.log(resp.data)
        res.status(200).json(resp.data)
   })
})

app.post(`/api/addFavorite`, (req, res) => {
    console.log(req.body) // console log the body sent in the request
    favorites.push(req.body.person) // push the new person in the body object into the array
    res.status(200).send(favorites) // send back the mmodified array
})

app.delete(`/api/deleteFavorite/:id`, (req, res) => { // we define ID as a parameter here
    console.log(req.params) // consolelog the req.params object
    // const {id} = req.params // destructuring id from req.params
    // const id = req.params.id // assigning an id variable the full path
    favorites.splice(req.params.id, 1) // splice out the index using the full nested value
    res.status(200).send(favorites) // now send back modified favorites array
})

const port = 3002;
app.listen(port, () => console.log(`Server listening on port ${port}`))
