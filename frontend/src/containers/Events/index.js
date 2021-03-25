import React from "react";
import { EventsContainer } from "./styles";
import Button from "../../components/UI/Button";
import Modal from "../../components/UI/Modal";

function Events() {
  return (
    <React.Fragment>
      <Modal>Modal Content</Modal>
      <EventsContainer>
        <p>Program your own Event!</p>
        <Button btnText="Create Event" />
      </EventsContainer>
    </React.Fragment>
  );
}

export default Events;

