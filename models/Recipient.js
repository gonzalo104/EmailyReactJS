/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 13: 47: 22
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 17: 49: 53
 */
const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
    email   : String,
    respnded: {type: Boolean, default: false}
});

module.exports = recipientSchema;