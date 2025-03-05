const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const logger = require('./logger');
const walletManager = require('./wallet');
const contractManager = require('./contracts');
const transactionManager = require('./transaction');
const validation = require('./validation');

const bot = new TelegramBot(config.botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome to the Monad NFT Minting Bot!');
});

bot.onText(/\/addwallet (.+) (.+)/, (msg, match) => {
    const userId = msg.from.id;
    const privateKey = match[1];
    const password = match[2];

    if (!validation.isValidPrivateKey(privateKey)) {
        bot.sendMessage(msg.chat.id, 'Invalid private key format.');
        return;
    }

    walletManager.addWallet(userId, privateKey, password);
    bot.sendMessage(msg.chat.id, 'Wallet added successfully!');
});

bot.onText(/\/remwallet/, (msg) => {
    const userId = msg.from.id;
    walletManager.removeWallet(userId);
    bot.sendMessage(msg.chat.id, 'Wallet removed successfully!');
});

// Additional command handlers for minting, contract management, and history will be implemented here.

module.exports = bot;
