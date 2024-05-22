const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/google/fail", function (req, res) {
  res.json({ status: "fail" });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/auth//google/fail",
    successRedirect: "/",
  }),
  function (req, res) {
    res.redirect("/auth/google");
  }
);

router.get("/login", function (req, res) {
  res.json({ message: "ok" });
});
module.exports = router;
