import { StyledButton } from "./styles";

function Button({
  type,
  marginLeft,
  onClick,
  btnText,
  disabled = false,
  cancel,
  confirm,
}) {
  return (
    <StyledButton
      marginLeft={marginLeft}
      type={type}
      cancel={cancel}
      confirm={confirm}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </StyledButton>
  );
}

export default Button;

