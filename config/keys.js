/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-14 17: 55: 05
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-19 17: 12: 09
 */

if (process.env.NODE_ENV == 'production') {
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}

//module.exports = require('./dev');