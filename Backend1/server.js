// server initiate
const express = require('express');
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// activate the server on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port no. 3000");
});

// Routes 
app.get('/', (req, res) => {
    res.send("hello, jee, kaise ho saare");
})

app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully.");
})

const mongoose = require('mongoose');
mongoose.connect('monogdb://localhost:27017/myDatabase', {
    useNerUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("connection Successful")})
.catch((error) => {console.log("Recieved an error")});