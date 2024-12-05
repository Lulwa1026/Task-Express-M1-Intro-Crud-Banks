const express = require("express");
const app = express();
const port = "8000";
const accountRoutes = require("./apis/accounts/routes");
app.use(express.json());
app.use("/api/accounts", accountRoutes);

app.listen(port, () => {
  console.log(`working!,${port}`);
});
