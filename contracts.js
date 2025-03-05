const contracts = {};

const addContract = (name, address, abi) => {
    contracts[name] = { address, abi };
};

const removeContract = (name) => {
    delete contracts[name];
};

const getContracts = () => {
    return contracts;
};

module.exports = { addContract, removeContract, getContracts };
