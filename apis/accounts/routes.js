const express = require("express");
const router = express.Router();
const {
  homeController,
  newAccountController,
  deleteAccountController,
  updateAccountController,
} = require("./controllers");
router.get("/", homeController);
router.post("/", newAccountController);
router.delete("/:accountId", deleteAccountController);
router.put("/:accountId", updateAccountController);

module.exports = router;
