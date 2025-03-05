const isValidPrivateKey = (key) => {
    return /^0x[a-fA-F0-9]{64}$/.test(key);
};

const isValidAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
};

module.exports = { isValidPrivateKey, isValidAddress };
