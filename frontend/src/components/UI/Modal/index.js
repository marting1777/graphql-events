import {
  ModalComponent,
  ModalHeader,
  ModalContent,
  ModalActions,
} from "./styles";
import Button from "../Button";

function Modal({ title, children }) {
  return (
    <ModalComponent>
      <ModalHeader>{title}</ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalActions>
        <Button btnText="Cancel" />
        <Button btnText="Confirm" />
      </ModalActions>
    </ModalComponent>
  );
}

export default Modal;
