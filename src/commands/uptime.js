const { exec } = require('child_process');

module.exports = function(bot, msg) {
    const chatId = msg.chat.id;

    // Execute the uptime command
    exec('uptime', (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(chatId, `Error executing uptime: ${error.message}`);
            return;
        }
        if (stderr) {
            bot.sendMessage(chatId, `Error: ${stderr}`);
            return;
        }
        // Send the uptime output as a message
        bot.sendMessage(chatId, `Uptime: ${stdout}`);
    });
};
