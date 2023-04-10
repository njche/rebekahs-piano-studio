require('dotenv').config({ path: "../.env" });
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const PORT = process.env.PORT || 8000

app.use(express.static('public'))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    console.log(req.body)
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: PORT,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PW
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: req.body.subject,
        text: `Message from ${req.body.email}: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})