// let accounts = require("../../accounts");
const Account = require("../../models/Account");

exports.homeController = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.newAccountController = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAccountController = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAccountController = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(200).json({ message: "account Updated Successfully" });
    } else {
      res.status(404).json({ message: "account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// let accounts = require("../../accounts");

// exports.homeController = (req, res) => {
//   res.status(200).json(accounts);
// };

// const creatNewAccount = (newAccountData) => {
//   const newId = accounts.length + 1;
//   const newAccount = Object.assign({ id: newId }, newAccountData);
//   return newAccount;
// };

// exports.newAccountController = (req, res) => {
//   const newAccount = creatNewAccount(req.body);
//   res.status(201).json(newAccount);
// };

// const deleteAccount = (accountId) => {
//   accountId = Number(accountId);
//   accounts = accounts.filter((account) => account.id !== accountId);
// };

// exports.deleteAccountController = (req, res) => {
//   const { accountId } = req.params;
//   const account = accounts.find((account) => account.id == accountId);

//   if (account) {
//     deleteAccount(accountId);
//     return res.status(204).json();
//   } else {
//     return res.status(404).json({ message: "not found" });
//   }
// };

// const updateAccount = (currentAccount, newAccount) => {
//   const theUpdatedAccount = Object.assign(currentAccount, newAccount);
//   return theUpdatedAccount;
// };

// exports.updateAccountController = (req, res) => {
//   const { accountId } = req.params;
//   const account = accounts.find((account) => account.id == accountId);
//   if (account) {
//     const updatedAccount = updateAccount(req.body);
//     res.status(200).json(updatedAccount);
//   } else {
//     res.status(404).json();
//   }
// };
