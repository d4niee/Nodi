const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const uptimeCommand = require('./commands/uptime');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Check if the message is "/uptime"
    if (msg.text.toString().toLowerCase() === "/uptime") {
        uptimeCommand(bot, msg);
    }
    
});
