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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    console.log(res.body)
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'marsinmike@live.com',
            pass: 'ct7754mmpiano'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'marsinmike@live.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
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