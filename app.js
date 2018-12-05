const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
// const AIMLParser = require('aimlparser')

const app = express()
const port = process.env.PORT || 4000
// const aimlParser = new AIMLParser({ name:'HelloBot' })

// aimlParser.load(['test-aiml.xml'])

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    // aimlParser.getResult('Hello', (answer, wildCardArray, input) => {
    //     reply(reply_token, input + "-------->" + answer)
    // })

    if (msg == 'news') {
        let body = JSON.stringify({
            replyToken: reply_token,
            messages: [{
                "type": "flex",
                "altText": "Flex Message",
                "contents": {
                  "type": "carousel",
                  "contents": [
                    {
                      "type": "bubble",
                      "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "text": "NEWS",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                          }
                        ]
                      },
                      "hero": {
                        "type": "image",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                          "type": "uri",
                          "label": "Action",
                          "uri": "https://linecorp.com/"
                        }
                      },
                      "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [
                          {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 1,
                            "contents": [
                              {
                                "type": "image",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
                                "gravity": "bottom",
                                "size": "sm",
                                "aspectRatio": "4:3",
                                "aspectMode": "cover"
                              },
                              {
                                "type": "image",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
                                "margin": "md",
                                "size": "sm",
                                "aspectRatio": "4:3",
                                "aspectMode": "cover"
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "contents": [
                              {
                                "type": "text",
                                "text": "7 Things to Know for Today",
                                "flex": 1,
                                "size": "xs",
                                "gravity": "top"
                              },
                              {
                                "type": "separator"
                              },
                              {
                                "type": "text",
                                "text": "Hay fever goes wild",
                                "flex": 2,
                                "size": "xs",
                                "gravity": "center"
                              },
                              {
                                "type": "separator"
                              },
                              {
                                "type": "text",
                                "text": "LINE Pay Begins Barcode Payment Service",
                                "flex": 2,
                                "size": "xs",
                                "gravity": "center"
                              },
                              {
                                "type": "separator"
                              },
                              {
                                "type": "text",
                                "text": "LINE Adds LINE Wallet",
                                "flex": 1,
                                "size": "xs",
                                "gravity": "bottom"
                              }
                            ]
                          }
                        ]
                      },
                      "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "More",
                              "uri": "https://linecorp.com"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "bubble",
                      "hero": {
                        "type": "image",
                        "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
                        "align": "center",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover"
                      },
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "md",
                        "action": {
                          "type": "uri",
                          "label": "Action",
                          "uri": "https://linecorp.com"
                        },
                        "contents": [
                          {
                            "type": "text",
                            "text": "PTT Stock",
                            "size": "xl",
                            "weight": "bold"
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                  {
                                    "type": "text",
                                    "text": "Price : $10.5",
                                    "flex": 0,
                                    "margin": "sm",
                                    "weight": "bold"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Description:"
                              },
                              {
                                "type": "text",
                                "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                "margin": "lg",
                                "size": "sm",
                                "align": "start",
                                "gravity": "center",
                                "weight": "regular",
                                "wrap": true
                              }
                            ]
                          }
                        ]
                      },
                      "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "spacer",
                            "size": "xxl"
                          },
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "Interested",
                              "uri": "https://linecorp.com"
                            },
                            "color": "#905C44",
                            "style": "primary"
                          }
                        ]
                      }
                    },
                    {
                      "type": "bubble",
                      "hero": {
                        "type": "image",
                        "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
                        "align": "center",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover"
                      },
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "md",
                        "action": {
                          "type": "uri",
                          "label": "Action",
                          "uri": "https://linecorp.com"
                        },
                        "contents": [
                          {
                            "type": "text",
                            "text": "PTT Stock",
                            "size": "xl",
                            "weight": "bold"
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                  {
                                    "type": "text",
                                    "text": "Price : $10.5",
                                    "flex": 0,
                                    "margin": "sm",
                                    "weight": "bold"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Description:"
                              },
                              {
                                "type": "text",
                                "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                "margin": "lg",
                                "size": "sm",
                                "align": "start",
                                "gravity": "center",
                                "weight": "regular",
                                "wrap": true
                              }
                            ]
                          }
                        ]
                      },
                      "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "spacer",
                            "size": "xxl"
                          },
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "Interested",
                              "uri": "https://linecorp.com"
                            },
                            "color": "#905C44",
                            "style": "primary"
                          }
                        ]
                      }
                    },
                    {
                      "type": "bubble",
                      "hero": {
                        "type": "image",
                        "url": "https://www.isranews.org/images/2017/isranews/05/010617_ptt.jpg",
                        "align": "center",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover"
                      },
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "md",
                        "action": {
                          "type": "uri",
                          "label": "Action",
                          "uri": "https://linecorp.com"
                        },
                        "contents": [
                          {
                            "type": "text",
                            "text": "PTT Stock",
                            "size": "xl",
                            "weight": "bold"
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                  {
                                    "type": "text",
                                    "text": "Price : $10.5",
                                    "flex": 0,
                                    "margin": "sm",
                                    "weight": "bold"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Description:"
                              },
                              {
                                "type": "text",
                                "text": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                "margin": "lg",
                                "size": "sm",
                                "align": "start",
                                "gravity": "center",
                                "weight": "regular",
                                "wrap": true
                              }
                            ]
                          }
                        ]
                      },
                      "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "spacer",
                            "size": "xxl"
                          },
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "Interested",
                              "uri": "https://linecorp.com"
                            },
                            "color": "#905C44",
                            "style": "primary"
                          }
                        ]
                      }
                    },
                    {
                      "type": "bubble",
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "See more",
                              "uri": "https://linecorp.com"
                            },
                            "flex": 1,
                            "gravity": "center"
                          }
                        ]
                      }
                    }
                  ]
                }
              }]
        })
    } else {
        let body = JSON.stringify({
            replyToken: reply_token,
            messages: [{
                type: 'text',
                text: msg
            }]
        })
    }

    reply(reply_token, )
    res.sendStatus(200)
})

app.listen(port)

function reply(reply_token, body) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SXacpAKQELBJCyS7RfhIpXs0Wd6wgk1plVX5ox1OKMywptsjpzp+uCusljlwn7A9F8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5ng4Y6sLrpJWi/RI8cv3msPEFRoxx6i9CZBBRFRK6NRUgdB04t89/1O/w1cDnyilFU='
    }

    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}