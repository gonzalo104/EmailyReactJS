/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 16: 09: 17
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-20 15: 13: 06
 */
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');
const keys           = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use( 
    new GoogleStrategy(
    {
      clientID    : keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL : '/auth/google/callback',
      proxy       : true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
