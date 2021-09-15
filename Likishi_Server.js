const nanoexpress = require('nanoexpress');
const app = nanoexpress();
const linebot = require('linebot')

var bot = linebot({
  channelId: CHANNEL_ID,
  channelSecret: CHANNEL_SECRET,
  channelAccessToken: CHANNEL_ACCESS_TOKEN
})

const linebotParser = bot.parser()

app.post('/linewebhook', linebotParser)
app.get('/webhook',(req, res) => {
  if (res) {
    let userMsg = res.__request.query.message
    console.log(editMsg(userMsg))
    return res.send(editMsg(userMsg));
  }
})

app.listen(3000);


var editMsg = function (msg) {
  return msg.substr(0,1) + '你去死啦!'
}