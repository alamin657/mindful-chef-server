const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const chefdetails = require('./data/chefdetails.json');

app.get('/', (req, res) => {
    res.send('Chef details is running')
})

app.get('/chefdetails', (req, res) => {
    res.send(chefdetails)
})

app.listen(port, () => {
    console.log(`Chef details is running on port: ${port}`)
})