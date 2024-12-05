let accounts = require("../../accounts");

exports.homeController = (req, res) => {
  res.status(200).json(accounts);
};

const creatNewAccount = (newAccountData) => {
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  return newAccount;
};

exports.newAccountController = (req, res) => {
  const newAccount = creatNewAccount(req.body);
  res.status(201).json(newAccount);
};

const deleteAccount = (accountId) => {
  accountId = Number(accountId);
  accounts = accounts.filter((account) => account.id !== accountId);
};

exports.deleteAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);

  if (account) {
    deleteAccount(accountId);
    return res.status(204).json();
  } else {
    return res.status(404).json({ message: "not found" });
  }
};

const updateAccount = (currentAccount, newAccount) => {
  const theUpdatedAccount = Object.assign(currentAccount, newAccount);
  return theUpdatedAccount;
};

exports.updateAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
};
