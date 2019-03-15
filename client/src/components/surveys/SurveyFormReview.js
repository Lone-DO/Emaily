// SurveyFormReview shows users thier inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyReview = ({ onCancle, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please Review your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancle}
      >
        Back
      </button>
      <button
        className="green right white-text btn-flat"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey
        <i className="material-icons">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(SurveyReview);
