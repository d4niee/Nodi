import TelegramBot from 'node-telegram-bot-api';
import fs from 'fs';
import path from 'path';

const commandsDir = path.resolve(__dirname, '../commands');

interface Command {
    (bot: TelegramBot, msg: TelegramBot.Message): void;
}

export function onMessage(bot: TelegramBot): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.readdir(commandsDir, (err, files) => {
            if (err) {
                reject('⛔ Error reading commands directory: ' + err);
                return;
            }

            let commandPromises: Promise<void>[] = [];

            files.forEach(file => {
                const commandPath = path.join(commandsDir, file);
                if (file.endsWith('.ts') || file.endsWith('.js')) {
                    const commandName = path.basename(file, path.extname(file));
                    const command: Command = require(commandPath).default;

                    const commandPromise = new Promise<void>((resolveCommand) => {
                        bot.onText(new RegExp(`/${commandName}`, 'i'), (msg: TelegramBot.Message) => {
                            command(bot, msg);
                        });
                        resolveCommand();
                    });

                    commandPromises.push(commandPromise);
                    console.log(`✅ initialized Command <${commandName}>`)
                }
            });

            // Resolve the promise when all commands have been processed
            Promise.all(commandPromises).then(() => {
                resolve();
            }).catch((error) => {
                reject('⛔ Error setting up commands: ' + error);
            });
        });
    });
}
