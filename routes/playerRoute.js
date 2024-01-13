const express = require("express");
const router = express.Router();

const playerController = require("../controllers/playerController.js");

router.get("/:pid", (req, res) => playerController.getUserData(req, res));
router.get("/streamers", (req, res) => playerController.getUserData(req, res));


module.exports = router;