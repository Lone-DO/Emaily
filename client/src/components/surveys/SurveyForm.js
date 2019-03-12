import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderField() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipient List"
          type="text"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      // Component Boiler plate setup
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
