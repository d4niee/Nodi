import TelegramBot, { Message } from 'node-telegram-bot-api';

/**
 * Basic Ping Pong Command for testing
 * @param bot Telegram Bot
 * @param msg Message
 */
export default function pingpong(bot: TelegramBot, msg: Message): void {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🏓 pong!');
}

