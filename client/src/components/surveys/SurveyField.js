/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 19: 05: 23
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 19: 51: 19
 */
import React from 'react';

export default ({input, label, meta: {error, touched}}) => {    
    
    return (
        <div>
            <label>{label}</label>
            <input  {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
            {touched && error}
            </div>
            
         </div>
    );
};