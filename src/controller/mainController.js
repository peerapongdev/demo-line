const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();


exports.main = async function (req, res) {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    let body = [];

    if (msg == "news") {
        body.push(serviceLine.messageNews());
    } else {
        body.push(serviceLine.messageText(msg));
    }

    serviceLine.replyLine(reply_token, body)
    res.sendStatus(200)
};