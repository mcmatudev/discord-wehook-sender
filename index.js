const { Webhook } = require('discord-webhook-node');
const readlineSync = require('readline-sync');
require('date-utils');


// 時間取得
const date = new Date();
const currentTime = date.toFormat('HH24'+':'+'MI');

// WebhookUrlを読み込む
const url = readlineSync.question(`[`+`\x1b[33m`+`${currentTime}\x1b[37m]` + `\x1b[32m` + `(+)` + `\x1b[37mEnter Your Webhook Url>>`)
const hook = new Webhook(url);

// データの設定
const data = {
    username: readlineSync.question(`[`+`\x1b[33m`+`${currentTime}\x1b[37m]` + `\x1b[32m` + `(+)` + `\x1b[37mPlease Enter Webhook Name>>`),
    content: readlineSync.question(`[`+`\x1b[33m`+`${currentTime}\x1b[37m]` + `\x1b[32m` + `(+)` + `\x1b[37mPlease Enter Message>>`)
}
// 送信時のメッセージ処理
const setup = () => {
    console.log(`[`+`\x1b[33m`+`${currentTime}\x1b[37m]` + `\x1b[32m` + `(+)` + `\x1b[37mSent!` + `\x1b[36m` +` MessageContent:` + `\x1b[31m`+`${data.content}`)
}
// webhookに送る処理
function send() {
    hook.setUsername(data.username);
    hook.send(data.content);
}   

// なんか知らんけど日本語打っても文字化けするから英語オンリーやで、ｗごめん！

setup();
send();