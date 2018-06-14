/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 11: 26: 20
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-14 11: 58: 49
 */
const express = require('express');
const app     = express();


app.get('/',(req,res)=>{
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);