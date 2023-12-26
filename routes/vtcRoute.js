const express = require("express");
const router = express.Router();

const vtcController = require("../controllers/vtcController.js");

router.get("/", (req, res) => vtcController.getVtcs(req, res));
router.get("/:vid", (req, res) => vtcController.getvtcDetails(req, res));
router.get("/members/:vid", (req, res) => vtcController.getvtcMembers(req, res));

module.exports = router;
