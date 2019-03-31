const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const cors = require('cors');

app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', (req, res) => {
    res.status(200).send({message: 'it works'})
})

const port = 3002;
app.listen(port, () => console.log(`Server listening on port ${port}`))
