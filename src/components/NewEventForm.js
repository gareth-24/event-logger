import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import { v4 } from 'uuid'; // new code

function NewEventForm(props){

  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({
      // need to parseInt here if we get numbers from the form
      name: event.target.name.value, 
      location: event.target.location.value, 
      date: event.target.date.value, 
      description: event.target.description.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewEventFormSubmission}>
        
        <input
          type='text'
          name='name'
          placeholder='Event Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input
          type='text'
          name='date'
          placeholder='Date' />
        <textarea
          name='description'
          placeholder='Event Description' />
        <button type='submit'>Add Event</button>
        
      </form>
    </React.Fragment>
  );

}

NewEventForm.propTypes = {
    onNewEventCreation: PropTypes.func
};

export default NewEventForm;