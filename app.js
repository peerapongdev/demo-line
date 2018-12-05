// Reply with two static messages
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token, JSON.stringify(req.body.events))
    res.sendStatus(200)
})
app.listen(port)



function reply(reply_token, address) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SXacpAKQELBJCyS7RfhIpXs0Wd6wgk1plVX5ox1OKMywptsjpzp+uCusljlwn7A9F8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5ng4Y6sLrpJWi/RI8cv3msPEFRoxx6i9CZBBRFRK6NRUgdB04t89/1O/w1cDnyilFU='
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
        },
        {
            type: 'text',
            text: address
        },
        {
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
                        "text": "Top news",
                        "size": "xl",
                        "weight": "bold",
                        "color": "#000000"
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
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Arm Chair, White",
                        "size": "xl",
                        "weight": "bold",
                        "wrap": true
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "text",
                            "text": "$49",
                            "flex": 0,
                            "size": "xl",
                            "weight": "bold",
                            "wrap": true
                          },
                          {
                            "type": "text",
                            "text": ".99",
                            "flex": 0,
                            "size": "sm",
                            "weight": "bold",
                            "wrap": true
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to Cart",
                          "uri": "https://linecorp.com"
                        },
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to whishlist",
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
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Metal Desk Lamp",
                        "size": "xl",
                        "weight": "bold",
                        "wrap": true
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "flex": 1,
                        "contents": [
                          {
                            "type": "text",
                            "text": "$11",
                            "flex": 0,
                            "size": "xl",
                            "weight": "bold",
                            "wrap": true
                          },
                          {
                            "type": "text",
                            "text": ".99",
                            "flex": 0,
                            "size": "sm",
                            "weight": "bold",
                            "wrap": true
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": "Temporarily out of stock",
                        "flex": 0,
                        "margin": "md",
                        "size": "xxs",
                        "color": "#FF5551",
                        "wrap": true
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to Cart",
                          "uri": "https://linecorp.com"
                        },
                        "flex": 2,
                        "color": "#AAAAAA",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to wish list",
                          "uri": "https://linecorp.com"
                        }
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
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}