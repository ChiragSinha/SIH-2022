const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 7000
const {MONGOURI} = require('./keys') // add mongo auth keys in keys.js folder

mongoose.connect(MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb")
})

mongoose.connection.on('error', (err) => {
    console.log("error", err)
})


app.get('/', (req, res) => {
    res.send("starting")
})

app.listen(PORT, () => {
    console.log("server is running on ", PORT)
})