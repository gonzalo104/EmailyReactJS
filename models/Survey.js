/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 13: 31: 50
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 16: 19: 38
 */
const mongoose        = require('mongoose');
const {Schema}        = mongoose;
const RecipientSchema = require('./Recipient');

const  surveySchema    = new Schema({
    title        : String,
    body         : String,
    subject      : String,
    recipients   : [RecipientSchema],
    yes          : {type: Number, default: 0},
    no           : {type: Number, default: 0},
    _user        : {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent     : Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);