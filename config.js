require('dotenv').config();

const config = {
    rpcUrl: process.env.RPC_URL || 'https://testnet-rpc.monad.xyz',
    explorerUrl: process.env.EXPLORER_URL || 'https://testnet.monadexplorer.com/',
    botToken: process.env.BOT_TOKEN,
    adminIDs: process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',') : [],
};

if (!config.botToken) {
    throw new Error('Bot token is missing in environment variables.');
}

module.exports = config;
