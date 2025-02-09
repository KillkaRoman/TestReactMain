const TelegramBot = require('node-telegram-bot-api');

const token = '8120340007:AAFodNgmrmOsK3DgEFFQI42OjPTD72ASvUI';

const bot = new TelegramBot(token, {polling: true});

const webAppUrl = 'https://core.telegram.org/bots/webapps';
https://core.telegram.org/bots/webapps
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  
  if(text === '/start'){
  await bot.sendMessage(chatId, 'Нажмите на кнопку что бы открыть магазин ', {
    reply_markup:{
      keyboard: [
      [{text: 'открыть магазин'}]
    ]
  }
})

await bot.sendMessage(chatId, 'сделать заказ', {
  reply_markup:{
    inline_keyboard: [
    [{text: 'сделать заказ', web_app: {url: webAppUrl}}]
  ]
}
})

}

});