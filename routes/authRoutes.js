/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 16: 09: 11
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-19 12: 02: 34
 */

const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile','email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));


    app.get('/api/logout',(req, resp) =>{
        resp.send(req.user);
        req.logout();
        
    });

    app.get('/api/current_user', (req,res) => {
            res.send(req.user);
    });

};


