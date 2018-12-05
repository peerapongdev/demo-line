const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();


exports.main = async function (req, res) {
    if (req.body.events) {
        let reply_token = req.body.events[0].replyToken || 0;
        let msg = req.body.events[0].message.text || '';
        let body = [];

        if (msg == "news") {
            body.push(serviceLine.messageNews());
        } else {
            body.push(serviceLine.messageText(msg));
        }

        serviceLine.replyLine(reply_token, body)
        res.sendStatus(200)
    }

    res.sendStatus(200)
};


exports.debug = async function (req, res) {
    let reply_token = "1";
    let msg = "news";
    let body = [];

    if (msg == "news") {
        body.push(serviceLine.messageNews());
    } else {
        body.push(serviceLine.messageText(msg));
    }

    serviceLine.replyLine(reply_token, body)
    res.sendStatus(200)
};