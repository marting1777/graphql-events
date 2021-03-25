import styled from 'styled-components';
import { plainBlack, plainWhite, green, lightGreen } from '../../../assets/styles/constants';

const StyledButton = styled.button`
  background: ${green};
  font: inherit;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  color: ${plainWhite};
  font-size: 1.2rem;
  box-shadow: 0px 0px 2px 1px ${plainBlack};
  cursor: pointer;
  margin-left: 1rem;
  outline: none;
  &:hover {
    background: ${lightGreen};
  }
`;

export { StyledButton };