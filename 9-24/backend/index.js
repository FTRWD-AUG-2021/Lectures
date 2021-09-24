const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const Animal = require('./models/Animal');
const cors = require('cors');


mongoose
    .connect(`mongodb://localhost:27017/elephantDB`)
    .then(self => console.log(`Connected to the database: "${self.connection.name}"`))


const app = express();
app.use(cors()) //for cors 
app.use(express.json()); //for req.body


//With req.query app.get('/attic ... http://localhost:5000/attic?name=turtle&weight=5&emotion=bored

//With req.params app.get('/attic/:name/:weight/:emotion' ... http://localhost:5000/attic/dog/10/happy

//With req.body app.post('/attic) ...  await axios.post(`http://localhost:5000/attic`, { name, weight, emotion })

app.post('/attic', async (req, res) => {
    // console.log(req.params, req.query, req.body)
    console.log('-=-=-=--', req.body, '-=-=-=--')
    let newb = await Animal.create(req.body)
    res.json(newb)
})


//http://localhost:5000/all-animals
app.get('/all-animals', async (req, res) => {
    let allTheAnimals = await Animal.find()
    res.json(allTheAnimals)
})


app.get('/specific-animal', async (req, res) => {
    let specific = await Animal.findById(req.query.animalId)
    res.json(specific)
})




app.listen(process.env.PORT || 5000)