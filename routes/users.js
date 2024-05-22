const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", function (req, res) {
  res.send("ok");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    successRedirect: "/",
  })
);

module.exports = router;
