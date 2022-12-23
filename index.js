const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const sesClient = require("./aws")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    sesClient.sendEmail('alok73327@gmail.com', "hello alok", "This is a mail.")
    res.send('Email is sent')
})

app.listen(3000, () => {
    console.log(`port is running on 3000`)
})