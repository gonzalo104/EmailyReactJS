/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 16: 41: 22
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-25 15: 51: 10
 */
const keys = require('../../config/keys');

 module.exports = (survey) => {
    return `
      <html>
        <body>
          <div style="text-align: center;">
            <h3>I'd like your input!</h3>
            <p>Please answer the following question: </p>
            <p>${survey.body}</p>
            <div>
              <a href="${keys.redirectDomain}/api/surveys/${survey.id}/thanks/yes">Yes</a>
            </div>
            <div>
              <a href="${keys.redirectDomain}/api/surveys//${survey.id}thanks/no">No</a>
            </div>
          </div>
        </body>
      </html>
    `;
 };

