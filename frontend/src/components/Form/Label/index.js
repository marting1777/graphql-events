import { StyledLabel } from "./styles";

function Label({ htmlFor, labelText }) {
  return <StyledLabel htmlFor={htmlFor}>{labelText}</StyledLabel>;
}

export default Label;

