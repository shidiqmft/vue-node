const express = require("express")
const app = express()

const port = 3000
const config = require("./config")

const client = require("twilio")(config.accountSID, config.authToken)

// /login
//     phonenumber
//     channel(sms/call)

// /verify
//     phonenumber
//     code

app.get('/login', (req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel
        })
        .then((data) => {
            res.status(200).send(data)
        })
})

app.get('/verify', (req,res) => {
    client
        .verify
        .services(config.serviceID)
        .verificationChecks
        .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
        })
        .then((data) => {
            res.status(200).send(data)
        })
})

app.listen(port, () => {
    console.log('Server is running at ${port}')
})