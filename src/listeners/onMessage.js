// src/listeners/onMessage.js

module.exports = function(bot, commands) {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text.toString().toLowerCase();

        // Check if the command exists in the "commands" object
        if (commands[text]) {
            commands[text](bot, msg);
        } else {
            unknownCommand(bot, msg);
        }
    });
};
