/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 19: 52: 47
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-25 11: 08: 27
 */
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {

    const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => re.test(email) === false);

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`
    }

    return;
    
};