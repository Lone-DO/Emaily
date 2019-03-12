// SurveyField contains logic to render single label & text input

import React from "react";

export default ({ input, label }) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
