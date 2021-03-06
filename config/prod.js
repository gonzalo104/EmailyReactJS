/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-19 16: 42: 35
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 17: 56: 54
 */
module.exports = {
    googleClientID      : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret  : process.env.GOOGLE_CLIENT_SECRET,
    mongoURI            : process.env.MONGO_URI,
    cookieKey           : process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey     : process.env.STRIPE_SECRET_KEY,
    sendGridKey         : process.env.SEND_GRID_KEY,
    redirectDomain      : process.env.REDIRECT_DOMAIN
};
 
