const TelegramBot = require('node-telegram-bot-api');

const token = '1659395590:AAEOhvHXOl6RU_QDTuMW8X5IciVfTWx6uvA';

const bot = new TelegramBot(token, {polling: true});



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const webAppUrl = 'https://kinomax.ru/';

  if (text === '/start') {
    bot.sendMessage(chatId, 'Received your message', {
      reply_markup: {
        remove_keyboard: true,
        inline_keyboard: [
          [{text: 'Заполните форму', web_app: {url: webAppUrl}}]
        ]
      }
    });

  }
});