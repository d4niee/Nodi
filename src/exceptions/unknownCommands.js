// src/exceptions/unknownCommand.js

module.exports = function(bot, msg) {
    const chatId = msg.chat.id;
    const text = msg.text.toString().toLowerCase();

    bot.sendMessage(chatId, `Unknown command: ${text}`);
};
