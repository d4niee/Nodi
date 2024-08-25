import TelegramBot, { Message } from 'node-telegram-bot-api';

export default function pingpong(bot: TelegramBot, msg: Message): void {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🏓 pong!');
}

