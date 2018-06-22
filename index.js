/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 11: 26: 20
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 10: 52: 21
 */
const express       = require('express');
const mongoose      = require('mongoose');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const bodyParser    = require('body-parser');
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

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys  : [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));
  const path = require('path');
  
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT ,console.log(`Server running in port: ${PORT}`));