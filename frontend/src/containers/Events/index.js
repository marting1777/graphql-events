import React, { useState, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { EventsContainer, SignInMessageContainer, EventsListContainer } from "./styles";
import Button from "../../components/UI/Button";
import Modal from "../../components/UI/Modal";
import Backdrop from "../../components/UI/Backdrop";
import Form from "../../components/Form";
import Event from "../../components/Event";
import { useHttp } from '../../hooks/useHttp';
import AuthContext from "../../context/auth-context";

function Events() {
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [requestBody, setRequestBody] = useState();
  const [status, data] = useHttp(requestBody);
  const contextAuth = useContext(AuthContext);

  useEffect(() => {
    if (contextAuth.token) {
      setRequestBody({
        query: `
          query {
            events {
              _id
              title
              description
              price
              date
            }
          }
        `,
      });
    }
  }, [contextAuth.token]);

  const startCreatingEvent = () => setCreating(true);
  const cancelCreationOfEvent = () => setCreating(false);
  const confirmCreationOfEvent = (event) => {
    event.preventDefault();
    if (title.trim().length === 0 || description.trim().length === 0 || price.trim().length === 0 || date.trim().length === 0) return

    setRequestBody({
      query: `
        mutation {
          createEvent(eventInput: { title: "${title}", description: "${description}", price: ${+price}, date: "${new Date(date).toISOString()}" }) {
            _id
            title
            description
            price
            date
            creator {
              _id
              email
            }
          }
        }
      `,
    });

    setCreating(false);
  }

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
      type: "number",
      placeholder: "Price",
    },
    {
      id: "date",
      htmlFor: "date",
      labelText: "Date",
      value: date,
      onChange: (event) => setDate(event.target.value),
      name: "date",
      type: "datetime-local",
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
      {contextAuth.token ? (
        <EventsContainer>
          <p>Program your own Event!</p>
          <Button btnText="Create Event" onClick={startCreatingEvent} />
        </EventsContainer>
      ) : (
        <SignInMessageContainer>
          <p>Login to create an event!</p>
          <NavLink to="/auth"><Button type="button" btnText="Login"/></NavLink>
        </SignInMessageContainer>
      )}
      {contextAuth.token && (data && data.events) && (
        <EventsListContainer>
          {data.events.map(event => <Event key={event._id} data={event}/>)}
        </EventsListContainer>
      )}
    </React.Fragment>
  );
}

export default Events;

