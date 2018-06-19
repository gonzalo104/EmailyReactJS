/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 11: 26: 20
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-14 19: 17: 18
 */
const express       = require('express');
const mongoose      = require('mongoose');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const keys          = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, (err) => {
  if (err) {
   return  console.log("****ERROR*****",err);
  }
  console.log("Conectado a mongoDB");
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys  : [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT ,console.log(`Server running in port: ${PORT}`));