const { Webhook } = require('discord-webhook-node');
require('date-utils');

// WebhookUrlを読み込む
const url = 'https://discord.com/api/webhooks/1189022941661380680/w8-VL95H6VO81PQzrqQKb0RU7Bay5AQCfTpuWDpgpImhYVnXFRTaBy4QmvHOjmRRkFru'
const hook = new Webhook(url);

const date = new Date();
const currentTime = date.toFormat('HH24'+':'+'MI');
// データの設定
const data = {
    username: "name",
    content: "content"
}
// webhookに送る処理
function send() {
    hook.setUsername(data.username);
    hook.send(data.content);
    console.log(`[${currentTime}]` + `\x1b[32m` + `(+)` + `\x1b[37mSended` )
}   

send();