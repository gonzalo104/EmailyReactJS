/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 15: 43: 32
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 16: 34: 03
 */
let requireCredits = (req, res, next) => {
    
    if (req.user.credits < 1) {
        return res.status(403).send({error: 'Not enougth credits'});
    }

    next();
    
};

module.exports = {
    requireCredits 
}