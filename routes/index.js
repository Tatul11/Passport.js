const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req.user);
  res.json({ message: req.user });
});

module.exports = router;
