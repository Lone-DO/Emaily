import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Subject Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends Component {
  renderField() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          require="require"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      // Component Boiler plate setup
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text ">
            Cancel
          </Link>
          <button className="teal btn-flat white-text right" type="submit">
            review
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  errors.emails = validateEmails(values.emails || "");

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
