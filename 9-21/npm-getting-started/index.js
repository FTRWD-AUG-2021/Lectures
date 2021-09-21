//import chalk from 'chalk' frontend
const chalk = require('chalk') //backend
const http = require('http');
const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));



// app.get('/home', (request, response, next) => {
//     console.log(request);
//     response.send('<h1>Welcome Ironhacker! :)</h1>');
// });

app.get('/favoriteHoliday', (req, res) => {
    res.json([{ name: 'Haloween' }, { name: "Christams" }])
})

app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
});

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});


app.listen(process.env.PORT || 3000, () => console.log('My first app listening on port 3000! '));
