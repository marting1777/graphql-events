import React, { useState } from "react";
import { EventsContainer } from "./styles";
import Button from "../../components/UI/Button";
import Modal from "../../components/UI/Modal";
import Backdrop from "../../components/UI/Backdrop";
import Form from "../../components/Form";

function Events() {
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const startCreatingEvent = () => setCreating(true);
  const cancelCreationOfEvent = () => setCreating(false);
  const confirmCreationOfEvent = () => setCreating(false);

  const FORM_DATA = [
    {
      id: "title",
      htmlFor: "title",
      labelText: "Title",
      value: title,
      onChange: (event) => setTitle(event.target.value),
      name: "title",
      type: "text",
      placeholder: "Title",
    },
    {
      id: "description",
      htmlFor: "description",
      labelText: "Description",
      value: description,
      onChange: (event) => setDescription(event.target.value),
      name: "description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: "price",
      htmlFor: "price",
      labelText: "Price",
      value: price,
      onChange: (event) => setPrice(event.target.value),
      name: "price",
      type: "text",
      placeholder: "Price",
    },
    {
      id: "date",
      htmlFor: "date",
      labelText: "Date",
      value: date,
      onChange: (event) => setDate(event.target.value),
      name: "date",
      type: "date",
      placeholder: "Date",
    },
  ];

  return (
    <React.Fragment>
      {creating && (
        <React.Fragment>
          <Backdrop />
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={cancelCreationOfEvent}
            onConfirm={confirmCreationOfEvent}
          >
            <Form data={FORM_DATA} onSubmit={confirmCreationOfEvent} />
          </Modal>
        </React.Fragment>
      )}
      <EventsContainer>
        <p>Program your own Event!</p>
        <Button btnText="Create Event" onClick={startCreatingEvent} />
      </EventsContainer>
    </React.Fragment>
  );
}

export default Events;

