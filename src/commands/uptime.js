const { exec } = require('child_process');

module.exports = function(bot, msg) {
    const chatId = msg.chat.id;

    exec('uptime', (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(chatId, `Error executing uptime: ${error.message}`);
            return;
        }
        if (stderr) {
            bot.sendMessage(chatId, `Error: ${stderr}`);
            return;
        }

        // Extract the uptime information (days and hours)
        const uptimeRegex = /up\s+(\d+)\s+days?,\s+(\d+):\d+/;
        const match = stdout.match(uptimeRegex);

        if (match) {
            const days = match[1];
            const hours = match[2];
            const uptimeMessage = `🕒 System Uptime: ${days} days and ${hours} hours`;
            bot.sendMessage(chatId, uptimeMessage);
        } else {
            // less than 1 day uptime
            const uptimeRegexHours = /up\s+(\d+):\d+/;
            const matchHours = stdout.match(uptimeRegexHours);

            if (matchHours) {
                const hours = matchHours[1];
                const uptimeMessage = `🕒 System Uptime: ${hours} hours`;
                bot.sendMessage(chatId, uptimeMessage);
            } else {
                bot.sendMessage(chatId, "Couldn't parse uptime information.");
            }
        }
    });
};
