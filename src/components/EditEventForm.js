import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm (props) {
  const { event } = props;

  function handleEditEventFormSubmission(e) {
    e.preventDefault();
    props.onEditEvent({name: e.target.name.value, location: e.target.location.value, date: e.target.date.value, description: e.target.description.value, id: event.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Event" />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;