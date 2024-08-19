# 🤖 Nodi
Nodi is a Telegram bot for monitoring and Logging your Bitcoin Full-Node. The Bot was designed to be used with the Raspi Blitz Project (see <a href="https://github.com/raspiblitz/raspiblitz"><b>here<b></a>)

- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#create-your-own-bot-using-the-botfather">Create a new Bot with BotFather</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#install-nodejs">Prepare your Pi: install NodeJS</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#add-your-bot-to-the-environment-file">Add your Bot Token to the environment</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#installation">Installation & Running Nodi on the Raspi Blitz</a>

## Preparation

Before you can start using Nodi you have to create your own Telegram bot (It's free and simple! 🎉). Also you need to install nodejs in the System you want to run the bot (Raspi Blitz for example).

### create your own bot using the botfather

The following steps describe how to create a new bot that you can use Nodi

- Contact @BotFather in your Telegram messenger
- To get a token, send BotFather a message that says /newbot
- When asked for a name for your new bot choose something that ends with the word bot. For example, my_test_bot
- If your chosen name is available, BotFather will send you a token
- Save the token for later

### install nodejs

If you run the Bot on your Raspberry Pi with Raspi Blitz you can install Nodejs with following command. This will install the current LTS version of Nodejs
```bash
sudo apt update
sudo apt install nodejs
```

### add your bot to the environment file

Now you have the token for your bot from step one the botfather. In the root directory create a new file .env and paste following into it:
```env
BOT_TOKEN="YOUR TOKEN HERE"
```

## Installation

First you need to clone the Repository and install all required dependencies
```bash
git clone https://github.com/d4niee/Nodi.git
cd Nodi
npm install
```
Running Nodi

Now you can run the Bot
```bash
node index.js
```
