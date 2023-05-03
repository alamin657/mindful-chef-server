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

app.get('/chefdetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedDetails = chefdetails.find(n => n.id == id);
    res.send(chefdetails)
    console.log(selectedDetails);
})
app.listen(port, () => {
    console.log(`Chef details is running on port: ${port}`)
})