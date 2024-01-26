const express = require('express')
require('dotenv')

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/twitter', (req, res) => {
    res.send('vishaldotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>chai aur code</h2>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})