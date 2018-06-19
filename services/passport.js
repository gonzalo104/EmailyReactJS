/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 16: 09: 17
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-19 17: 23: 13
 */
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');
const keys           = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
  done(null,user.id);
});

passport.deserializeUser((id, done) => {
  console.log(id)  
  User.findById()
        .then(user => {
          done(null, user);
        });

});


passport.use(
    new GoogleStrategy({
    clientID    : keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy       : true
  }, 
    (accessToken, refreshToken, profile, done) => {

      const user = User.findOne({googleId: profile.id})
                  .then((existingUser)=>{
                      if (existingUser) {
                        console.log("ya existe el usuario")
                        done(null,existingUser);
                      }else{
                        new User({googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                      }
                  });      

  })
  );
