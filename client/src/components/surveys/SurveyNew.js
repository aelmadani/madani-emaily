// SurveyNew shows survey form and survey review

import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// Here we use reduxForm wrapping to ensure that when we click cancel, the form data is dropped
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
