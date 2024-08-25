# 🤖 Nodi (⚠️ currently in development!)
Nodi is a Telegram bot for monitoring and Logging your Bitcoin Full-Node and LND. The Bot was designed to be used with the Raspi Blitz Project (see <a href="https://github.com/raspiblitz/raspiblitz"><b>here<b></a>)

- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#create-your-own-bot-using-the-botfather">Create a new Bot with BotFather</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#install-nodejs">Prepare your Pi: install NodeJS</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#add-your-bot-to-the-environment-file">Add your Bot Token to the environment</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#installation">Installation & Running Nodi on the Raspi Blitz</a>
- <a href="https://github.com/d4niee/Nodi?tab=readme-ov-file#Commands">Command List</a>

## 🛠️ Preparation

Before you can start using Nodi you have to create your own Telegram bot. Because you want to use it for your own node there is no option for a global usable Bot (But It's free and simple! 🎉). Also you need to install nodejs in the System you want to run the bot (Raspi Blitz for example).

### create your own bot using the botfather

The following steps describe how to create a new bot that you can use Nodi

- Contact @BotFather in your Telegram messenger
- To get a token, send BotFather a message that says /newbot
- When asked for a name for your new bot choose something that ends with the word bot. For example, my_test_bot
- If your chosen name is available, BotFather will send you a token
- Save the token for later

### install nodejs

If you run the Bot on your Raspberry Pi with Raspi Blitz Nodejs should be pre installed with the enhanced Image. But if not, or you are using the minimal installation you can install Nodejs with following command. This will install the current LTS version of Nodejs
```bash
sudo apt update
sudo apt install nodejs
```

### add your bot to the environment file

Now you have the token for your bot from step one the botfather. In the root directory create a new file ``.env`` and paste following content into it:
```env
BOT_TOKEN="YOUR TOKEN HERE"
```

You need this token to communicate with the Bot later

## 🔧 Installation

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

## 📜 Commands

| Category   | Command       | Description                           | 
|------------|---------------|---------------------------------------|
| **Utility** | `uptime`      | Displays the system uptime.          |

# References

1. **RaspiBlitz** - [RaspiBlitz](https://raspiblitz.org/)
2. **Telegram Bot API Documentation** - [Telegram Bot API](https://core.telegram.org/bots/api)
2. **Node Telegram Bot API** - [Node Telegram Bot API](https://github.com/yagop/node-telegram-bot-api)
3. **Node Telegram Bot API Tutorial** - [Node Telegram Bot API Tutorial by hosein2398](https://github.com/hosein2398/node-telegram-bot-api-tutorial)
