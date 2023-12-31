import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';
import EventDetail from './EventDetail';
import EditEventForm from './EditEventForm';

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEventList: [],
      selectedEvent: null,
      editing: false
    };
  }

  handleAddingNewEventToList = (newEvent) => {
    const newMainEventList = this.state.mainEventList.concat(newEvent);
    this.setState({mainEventList: newMainEventList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false // new code
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
    this.setState({selectedEvent: selectedEvent});
  }

  handleDeletingEvent = (id) => {
    const newMainEventList = this.state.mainEventList.filter(event => event.id !== id);
    this.setState({
      mainEventList: newMainEventList,
      selectedEvent: null
    });
  }

  handleEditingEventInList = (eventToEdit) => {
    const editedMainEventList = this.state.mainEventList
      .filter(event => event.id !== this.state.selectedEvent.id)
      .concat(eventToEdit);
    this.setState({
        mainEventList: editedMainEventList,
        editing: false,
        selectedEvent: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = 
      <EditEventForm 
        event = {this.state.selectedEvent}
        onEditEvent = {this.handleEditingEventInList} />
      buttonText = "Return to Event List";
    } else if (this.state.selectedEvent != null) {
      currentlyVisibleState = 
      <EventDetail 
        event = {this.state.selectedEvent} 
        onClickingDelete = {this.handleDeletingEvent}
        onClickingEdit = {this.handleEditClick} />;
      buttonText = "Return to Event List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewEventForm 
        onNewEventCreation={this.handleAddingNewEventToList}  />;
      buttonText = "Return to Event List";
    } else {
      currentlyVisibleState = 
      <EventList 
        eventList={this.state.mainEventList} 
        onEventSelection={this.handleChangingSelectedEvent} />;
      buttonText = "Add Event";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    );
  }

}

export default EventControl;