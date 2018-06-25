/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 18: 06: 23
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-22 18: 19: 47
 */

import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dasboard
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons ">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;