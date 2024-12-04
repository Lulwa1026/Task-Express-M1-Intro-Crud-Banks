const express = require("express");
const app = express();
const port = "8000";
let accounts = require("./accounts");

app.use(express.json());

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

const creatNewAccount = (newAccountData) => {
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  return newAccount;
};

app.post("/accounts", (req, res) => {
  const newAccount = creatNewAccount(req.body);
  res.status(201).json(newAccount);
});

const deleteAccount = (accountId) => {
  accountId = Number(accountId);
  accounts = accounts.filter((account) => account.id !== accountId);
};

app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);

  if (account) {
    deleteAccount(accountId);
    return res.status(204).json();
  } else {
    return res.status(404).json({ message: "not found" });
  }
});

const updateAccount = (currentAccount, newAccount) => {
  const theUpdatedAccount = Object.assign(currentAccount, newAccount);
  return theUpdatedAccount;
};

app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
});

app.listen(port, () => {
  console.log("working!");
});
