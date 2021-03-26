import styled from "styled-components";
import { blue, plainBlack, plainWhite } from "../../../assets/styles/constants";

const ModalComponent = styled.div`
  width: 90%;
  background: ${plainWhite};
  box-shadow: 0px 2px 8px ${plainBlack};
  position: fixed;
  top: 5vh;
  left: 5%;
  @media (min-width: 768px) {
    width: 45rem;
    left: calc((100% - 45rem) / 2);
  }
`;

const ModalHeader = styled.header`
  padding: 1rem;
  background: ${blue};
  color: ${plainWhite};
  h1 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const ModalContent = styled.section`
  padding: 0rem;
`;

const ModalActions = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export { ModalComponent, ModalHeader, ModalContent, ModalActions };

