/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-21 18: 51: 49
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-21 19: 26: 37
 */
const keys           = require('../config/keys');
const stripe         = require('stripe')(keys.stripeSecretKey);
const {authRequired} = require('../middlewares/requiereLogin');


module.exports = app => {


    app.post('/api/stripe',authRequired,  async (req,res) => {

        
        const charge = await stripe.charges.create({
            amount     : 500,
            currency   : 'usd',
            description: '$5 fro 5 credits',
            source     : req.body.id
        });

            req.user.credits += 5;

            const user = await req.user.save();
            res.send(user);
    });

};