import styled from "styled-components";
import { lightBlue, plainWhite } from "../../assets/styles/constants";

const EventsContainer = styled.div`
  background: ${plainWhite};
  border: 2px solid ${lightBlue};
  border-radius: 4px;
  text-align: center;
  padding: 2rem;
  margin: 2rem auto;
  width: 30rem;
  max-width: 80%;
`;

export { EventsContainer };

