const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
  username: String,
  funds: String,
});

module.exports = model("Account", AccountSchema);
