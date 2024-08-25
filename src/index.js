// src/index.js

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

// Create an object to hold all commands
const commands = {};

// Dynamically load all command modules from the "commands" directory
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    const commandName = `/${path.basename(file, '.js')}`;
    commands[commandName] = command;
}

// Dynamically load and initialize all listeners from the "listeners" directory
const listenerFiles = fs.readdirSync(path.join(__dirname, 'listeners')).filter(file => file.endsWith('.js'));

for (const file of listenerFiles) {
    const listener = require(`./listeners/${file}`);
    listener(bot, commands);
}
