import React from "react";
import PropTypes from "prop-types";

function EventDetail(props){
  const { event, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Event Details</h1>
      <h3>{event.name}</h3>
      <h5>{event.location} - {event.date}</h5>
      <p><em>{event.description}</em></p>
      <button onClick={()=> onClickingDelete(event.id) }>Delete Event</button> 
      <hr/>
    </React.Fragment>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func // new code
};

export default EventDetail;