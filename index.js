const express = require('express')
const app = express()
const PORT = 7000


app.get('/', (req, res) => {
    res.send("starting")
})

app.listen(PORT, () => {
    console.log("server is running on ", PORT)
})