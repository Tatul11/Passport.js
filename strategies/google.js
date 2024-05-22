const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        callbackURL: "http://localhost:3000/auth/google/redirect",
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        return cb(null, profile);
      }
    ),
    passport.serializeUser((user, done) => {
      done(null, user);
    }),
    passport.deserializeUser((user, done) => {
      done(null, user);
    })
  );
};
