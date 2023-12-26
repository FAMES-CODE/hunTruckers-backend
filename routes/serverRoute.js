const express = require("express");
const router = express.Router();

const serverController = require("../controllers/serverController.js");

router.get("/", (req, res) => serverController.serversStats(req, res));

module.exports = router;
