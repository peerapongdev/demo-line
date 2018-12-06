// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // // Add env
// // require('dotenv').config();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// require('./src/route/mainRoute')(app);

// app.listen(process.env.START_SERVER || 4000, () => 
//     console.log(`Example app listening on port ${process.env.START_SERVER || 4000}`)
// );

// Reply using AIML

// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const AIMLInterpreter = require('aimlinterpreter')

// const app = express()
// const port = process.env.PORT || 4000
// const aimlInterpreter = new AIMLInterpreter({ name:'HelloBot'})

// aimlInterpreter.loadAIMLFilesIntoArray(['./test-aiml.xml'])

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//     let reply_token = req.body.events[0].replyToken
//     let msg = req.body.events[0].message.text
//     aimlInterpreter.findAnswerInLoadedAIMLFiles(msg, (answer, wildCardArray, input) => {
//         reply(reply_token, answer)
//     })
//     res.sendStatus(200)
// })

// app.listen(port)

// function reply(reply_token, msg) {
//     let headers = {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer SYvxcKZpk0KkZJjiecJeO2Rsv/JXQk2tXxTYEr/FM+sy92kre+GfEkDPVvMMJy2uF8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5mpeF1hfCwPcOlXUVPIHu50Bg+wYMYQSreH7nFd2CapZwdB04t89/1O/w1cDnyilFU='
//     }

//     let body = JSON.stringify({
//         replyToken: reply_token,
//         messages: [{
//             type: 'text',
//             text: msg
//         }]
//     })

//     request.post({
//         url: 'https://api.line.me/v2/bot/message/reply',
//         headers: headers,
//         body: body
//     }, (err, res, body) => {
//         console.log('status = ' + res.statusCode);
//     });
// }

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const sendLine = require('./src/constant/sendLine');
const serviceLine = new sendLine();


const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken;
    let msg = req.body.events[0].message.text;
    let body = [];


    if (msg == "news") {
        body.push(serviceLine.messageNews());
    } else {
        body.push(serviceLine.messageText(msg));
    }

    serviceLine.replyLine(reply_token, body);
    res.sendStatus(200)
})

app.listen(port);

// function reply(reply_token, msgArray) {
//     let headers = {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer SYvxcKZpk0KkZJjiecJeO2Rsv/JXQk2tXxTYEr/FM+sy92kre+GfEkDPVvMMJy2uF8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5mpeF1hfCwPcOlXUVPIHu50Bg+wYMYQSreH7nFd2CapZwdB04t89/1O/w1cDnyilFU='
//     }

//     let body = JSON.stringify({
//         replyToken: reply_token,
//         messages: msgArray
//     })

//     request.post({
//         url: 'https://api.line.me/v2/bot/message/reply',
//         headers: headers,
//         body: body
//     }, (err, res, body) => {
//         console.log('status = ' + res.statusCode);
//     });
// }



// function messageNews() {

//     const msg = {
//         "type": "flex",
//         "altText": "Hot News!",
//         "contents": {
//           "type": "carousel",
//           "contents": [
//             {
//               "type": "bubble",
//               "header": {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "NEWS",
//                     "size": "sm",
//                     "weight": "bold",
//                     "color": "#AAAAAA"
//                   }
//                 ]
//               },
//               "hero": {
//                 "type": "image",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
//                 "size": "full",
//                 "aspectRatio": "20:13",
//                 "aspectMode": "cover",
//                 "action": {
//                   "type": "uri",
//                   "label": "Action",
//                   "uri": "https://linecorp.com/"
//                 }
//               },
//               "body": {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "spacing": "md",
//                 "contents": [
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "flex": 1,
//                     "contents": [
//                       {
//                         "type": "image",
//                         "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
//                         "gravity": "bottom",
//                         "size": "sm",
//                         "aspectRatio": "4:3",
//                         "aspectMode": "cover"
//                       },
//                       {
//                         "type": "image",
//                         "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
//                         "margin": "md",
//                         "size": "sm",
//                         "aspectRatio": "4:3",
//                         "aspectMode": "cover"
//                       }
//                     ]
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "flex": 2,
//                     "contents": [
//                       {
//                         "type": "text",
//                         "text": "7 Things to Know for Today",
//                         "flex": 1,
//                         "size": "xs",
//                         "gravity": "top"
//                       },
//                       {
//                         "type": "separator"
//                       },
//                       {
//                         "type": "text",
//                         "text": "Hay fever goes wild",
//                         "flex": 2,
//                         "size": "xs",
//                         "gravity": "center"
//                       },
//                       {
//                         "type": "separator"
//                       },
//                       {
//                         "type": "text",
//                         "text": "LINE Pay Begins Barcode Payment Service",
//                         "flex": 2,
//                         "size": "xs",
//                         "gravity": "center"
//                       },
//                       {
//                         "type": "separator"
//                       },
//                       {
//                         "type": "text",
//                         "text": "LINE Adds LINE Wallet",
//                         "flex": 1,
//                         "size": "xs",
//                         "gravity": "bottom"
//                       }
//                     ]
//                   }
//                 ]
//               },
//               "footer": {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "contents": [
//                   {
//                     "type": "button",
//                     "action": {
//                       "type": "uri",
//                       "label": "More",
//                       "uri": "https://linecorp.com"
//                     }
//                   }
//                 ]
//               }
//             },
//             {
//               "type": "bubble",
//               "hero": {
//                 "type": "image",
//                 "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
//                 "align": "center",
//                 "size": "full",
//                 "aspectRatio": "20:13",
//                 "aspectMode": "cover"
//               },
//               "body": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "spacing": "md",
//                 "action": {
//                   "type": "uri",
//                   "label": "Action",
//                   "uri": "https://linecorp.com"
//                 },
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "PTT Stock",
//                     "size": "xl",
//                     "weight": "bold"
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "spacing": "sm",
//                     "contents": [
//                       {
//                         "type": "box",
//                         "layout": "baseline",
//                         "contents": [
//                           {
//                             "type": "text",
//                             "text": "Price : $10.5",
//                             "flex": 0,
//                             "margin": "sm",
//                             "weight": "bold"
//                           }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "contents": [
//                       {
//                         "type": "text",
//                         "text": "Description:"
//                       },
//                       {
//                         "type": "text",
//                         "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//                         "margin": "lg",
//                         "size": "sm",
//                         "align": "start",
//                         "gravity": "center",
//                         "weight": "regular",
//                         "wrap": true
//                       }
//                     ]
//                   }
//                 ]
//               },
//               "footer": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "spacer",
//                     "size": "xxl"
//                   },
//                   {
//                     "type": "button",
//                     "action": {
//                       "type": "uri",
//                       "label": "Interested",
//                       "uri": "https://linecorp.com"
//                     },
//                     "color": "#905C44",
//                     "style": "primary"
//                   }
//                 ]
//               }
//             },
//             {
//               "type": "bubble",
//               "hero": {
//                 "type": "image",
//                 "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
//                 "align": "center",
//                 "size": "full",
//                 "aspectRatio": "20:13",
//                 "aspectMode": "cover"
//               },
//               "body": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "spacing": "md",
//                 "action": {
//                   "type": "uri",
//                   "label": "Action",
//                   "uri": "https://linecorp.com"
//                 },
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "PTT Stock",
//                     "size": "xl",
//                     "weight": "bold"
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "spacing": "sm",
//                     "contents": [
//                       {
//                         "type": "box",
//                         "layout": "baseline",
//                         "contents": [
//                           {
//                             "type": "text",
//                             "text": "Price : $10.5",
//                             "flex": 0,
//                             "margin": "sm",
//                             "weight": "bold"
//                           }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "contents": [
//                       {
//                         "type": "text",
//                         "text": "Description:"
//                       },
//                       {
//                         "type": "text",
//                         "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//                         "margin": "lg",
//                         "size": "sm",
//                         "align": "start",
//                         "gravity": "center",
//                         "weight": "regular",
//                         "wrap": true
//                       }
//                     ]
//                   }
//                 ]
//               },
//               "footer": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "spacer",
//                     "size": "xxl"
//                   },
//                   {
//                     "type": "button",
//                     "action": {
//                       "type": "uri",
//                       "label": "Interested",
//                       "uri": "https://linecorp.com"
//                     },
//                     "color": "#905C44",
//                     "style": "primary"
//                   }
//                 ]
//               }
//             },
//             {
//               "type": "bubble",
//               "hero": {
//                 "type": "image",
//                 "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
//                 "align": "center",
//                 "size": "full",
//                 "aspectRatio": "20:13",
//                 "aspectMode": "cover"
//               },
//               "body": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "spacing": "md",
//                 "action": {
//                   "type": "uri",
//                   "label": "Action",
//                   "uri": "https://linecorp.com"
//                 },
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "PTT Stock",
//                     "size": "xl",
//                     "weight": "bold"
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "spacing": "sm",
//                     "contents": [
//                       {
//                         "type": "box",
//                         "layout": "baseline",
//                         "contents": [
//                           {
//                             "type": "text",
//                             "text": "Price : $10.5",
//                             "flex": 0,
//                             "margin": "sm",
//                             "weight": "bold"
//                           }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     "type": "box",
//                     "layout": "vertical",
//                     "contents": [
//                       {
//                         "type": "text",
//                         "text": "Description:"
//                       },
//                       {
//                         "type": "text",
//                         "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//                         "margin": "lg",
//                         "size": "sm",
//                         "align": "start",
//                         "gravity": "center",
//                         "weight": "regular",
//                         "wrap": true
//                       }
//                     ]
//                   }
//                 ]
//               },
//               "footer": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "spacer",
//                     "size": "xxl"
//                   },
//                   {
//                     "type": "button",
//                     "action": {
//                       "type": "uri",
//                       "label": "Interested",
//                       "uri": "https://linecorp.com"
//                     },
//                     "color": "#905C44",
//                     "style": "primary"
//                   }
//                 ]
//               }
//             },
//             {
//               "type": "bubble",
//               "body": {
//                 "type": "box",
//                 "layout": "vertical",
//                 "spacing": "sm",
//                 "contents": [
//                   {
//                     "type": "button",
//                     "action": {
//                       "type": "uri",
//                       "label": "See more",
//                       "uri": "https://linecorp.com"
//                     },
//                     "flex": 1,
//                     "gravity": "center"
//                   }
//                 ]
//               }
//             }
//           ]
//         }
//     };
//     return msg;
// }

// function messageText(message) {
//     const msg = {
//         type: 'text',
//         text: message
//     };

//     return msg;
// }