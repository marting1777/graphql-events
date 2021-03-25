import { StyledButton } from "./styles";

function Button({ type, marginLeft, onClick, btnText, disabled = false }) {
  return (
    <StyledButton
      marginLeft={marginLeft}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </StyledButton>
  );
}

export default Button;

