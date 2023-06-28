import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenEventClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.location} - {props.date}</h5>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenEventClicked: PropTypes.func // new PropType
};

export default Event;