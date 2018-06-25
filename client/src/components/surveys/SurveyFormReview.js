/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-25 11: 11: 46
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-25 13: 10: 43
 */

 import React from 'react';
 import {connect} from 'react-redux';
 import formFields from './formFields';
 import {withRouter} from 'react-router-dom';
 import * as actions from '../../actions';
 import _ from 'lodash';
 
 const SurveyFormReview = ({onCancel, formValues,submitSurvey, history}) => {

  const reviewFields = _.map(formFields, ({name,label}) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>
      );
  });


   return (
     <div>
       <h5>Please confirm your entries</h5>
      {reviewFields}
       <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
       <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues,history)}>Send Survey <i className="material-icons rigth">email</i></button>
     </div>
   )
 }

 function mapStateToProps(state){
    return{
      formValues: state.form.surveyForm.values
    };
 }
 
 export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
 