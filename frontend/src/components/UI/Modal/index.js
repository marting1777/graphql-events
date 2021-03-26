import {
  ModalComponent,
  ModalHeader,
  ModalContent,
  ModalActions,
} from "./styles";
import Button from "../Button";

function Modal({
  title,
  children,
  canCancel,
  canConfirm,
  onCancel,
  onConfirm,
}) {
  return (
    <ModalComponent>
      <ModalHeader>
        <h1>{title}</h1>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalActions>
        {canCancel && (
          <Button cancel marginLeft btnText="Cancel" onClick={onCancel} />
        )}
        {canConfirm && (
          <Button confirm marginLeft btnText="Confirm" onClick={onConfirm} />
        )}
      </ModalActions>
    </ModalComponent>
  );
}

export default Modal;

