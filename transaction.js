const transactions = [];

const addTransaction = (transaction) => {
    transactions.push(transaction);
};

const getTransactionHistory = () => {
    return transactions;
};

module.exports = { addTransaction, getTransactionHistory };
