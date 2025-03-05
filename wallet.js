const CryptoJS = require('crypto-js');
const logger = require('./logger');

const wallets = {};

const encryptWallet = (privateKey, password) => {
    return CryptoJS.AES.encrypt(privateKey, password).toString();
};

const decryptWallet = (encryptedKey, password) => {
    const bytes = CryptoJS.AES.decrypt(encryptedKey, password);
    return bytes.toString(CryptoJS.enc.Utf8);
};

const addWallet = (userId, privateKey, password) => {
    if (!wallets[userId]) {
        wallets[userId] = {};
    }
    wallets[userId].encryptedKey = encryptWallet(privateKey, password);
    logger.info(`Wallet added for user: ${userId}`);
};

const removeWallet = (userId) => {
    delete wallets[userId];
    logger.info(`Wallet removed for user: ${userId}`);
};

const getWallet = (userId, password) => {
    const wallet = wallets[userId];
    if (wallet) {
        return decryptWallet(wallet.encryptedKey, password);
    }
    throw new Error('Wallet not found.');
};

module.exports = { addWallet, removeWallet, getWallet };
