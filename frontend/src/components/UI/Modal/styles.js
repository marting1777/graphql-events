import styled from "styled-components";
import { plainBlack, plainWhite } from "../../../assets/styles/constants";

const ModalComponent = styled.div`
  width: 90%;
  background: ${plainWhite};
  box-shadow: 0px 2px 8px ${plainBlack};
  position: fixed;
  top: 20vh;
  left: 5%;
  @media (min-width: 768px) {
    width: 30rem;
    left: calc((100% - 30rem) / 2);
  }
`;

const ModalHeader = styled.header``;

const ModalContent = styled.section``;

const ModalActions = styled.section``;

export { ModalComponent, ModalHeader, ModalContent, ModalActions };
