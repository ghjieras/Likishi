const nanoexpress = require('nanoexpress');
const app = nanoexpress();
const crypto = require('crypto');
const line = require('@line/bot-sdk');

var bot = {
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken,
  setHeaders: 'X-Line-Signature'
}

app.post('/callback', (req, res) => {
  if (res) {
    let resData = res.__request.body.toString() // 收到的資料轉換字串
    let ParseData = JSON.parse(resData) // 收到的資料轉換字串解JSON
    // console.log(ParseData)

    const channelSecret = bot.channelSecret // Channel secret string
    const body = 'aa'; // Request body string
    const signature = crypto
      .createHmac('SHA256', channelSecret)
      .update(body).digest('base64');

    let replyMsg = editMsg(ParseData.events[0].message.text) // 收到的文字訊息做處理

    const client = new line.Client({
      channelAccessToken: bot.channelAccessToken
    });
    const message = {
      type: 'text',
      text: replyMsg
    };
    client.replyMessage(ParseData.events[0].replyToken, message)


    return res.send(signature)
  }
})

app.listen(3000);






var editMsg = function (msg) {
  return msg.substr(0, 1) + '你去死啦!'
}