/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 17: 55: 11
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-21 19: 06: 48
 */
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits : {type: Number, default: 0}
});


mongoose.model('users', userSchema);

