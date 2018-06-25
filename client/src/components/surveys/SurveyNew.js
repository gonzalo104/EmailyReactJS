/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-22 18: 47: 18
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-25 12: 54: 33
 */
import React, { Component } from 'react'
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

  state = {showFormReview: false};
  
  renderContent(){
      if (this.state.showFormReview) {
        return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})}/>;
      }
      return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);