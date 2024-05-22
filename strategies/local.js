const localStrategy = require("passport-local").Strategy;
const passport = require("passport");

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: "email", passReqToCallback: true },
      (req, email, password, done) => {
        return done(null, { id: 1, name: "Jordan" });
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
