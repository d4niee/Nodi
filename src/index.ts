import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { onMessage } from './listeners/onMessage';
import splashartASCII from './splash';

dotenv.config();

const token = process.env.BOT_TOKEN;
if (!token) {
    throw new Error('⛔ BOT_TOKEN is not defined in .env see documentation: https://github.com/d4niee/Nodi?tab=readme-ov-file#add-your-bot-to-the-environment-file');
}

const bot = new TelegramBot(token, { polling: true });

// Listeners
onMessage(bot).then(() => {
  console.log(splashartASCII())
});
