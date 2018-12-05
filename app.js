// Reply with two static messages
const token = "SXacpAKQELBJCyS7RfhIpXs0Wd6wgk1plVX5ox1OKMywptsjpzp+uCusljlwn7A9F8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5ng4Y6sLrpJWi/RI8cv3msPEFRoxx6i9CZBBRFRK6NRUgdB04t89/1O/w1cDnyilFU=";
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}