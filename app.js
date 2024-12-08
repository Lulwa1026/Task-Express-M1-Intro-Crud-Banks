const express = require("express");
const app = express();
const port = "8000";
const accountRoutes = require("./apis/accounts/routes");
const connectDb = require("./database");
app.use(express.json());
app.use("/api/accounts", accountRoutes);

connectDb();

app.listen(port, () => {
  console.log(`working!,${port}`);
});
