const logger = require('./logger');
const bot = require('./telegram');

bot.on('polling_error', (error) => {
    logger.error(`Polling error: ${error.message}`);
});

logger.info('Monad NFT Minting Bot has started');
