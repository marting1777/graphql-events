import { StyledInput } from "./styles";

function Input({ type, placeholder, value, onChange, inputName, id }) {
  return (
    <StyledInput
      id={id}
      type={type}
      name={inputName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
