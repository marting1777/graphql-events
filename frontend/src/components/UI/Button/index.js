import { StyledButton } from './styles';

function Button({ type, onClick, btnText, disabled = false }) {
  return <StyledButton type={type} onClick={onClick} disabled={disabled}>{btnText}</StyledButton>
}

export default Button;