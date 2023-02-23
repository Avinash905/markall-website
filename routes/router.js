const express = require("express");
const messageController = require("../controller/messageController");

const router = express.Router();

router.post("/sendmessage", messageController.sendMessage);

module.exports = router;
