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
   console.log(req.query)
   axios.get(`https://rickandmortyapi.com/api/character?name=${req.query.name}`)
   .then((resp) => {
       console.log(resp.data)
        res.status(200).json(resp.data)
   })
})

app.post(`/api/addFavorite`, (req, res) => {
    console.log(req.body)
    favorites.push(req.body.person)
    res.status(200).send(favorites)
})

const port = 3002;
app.listen(port, () => console.log(`Server listening on port ${port}`))
