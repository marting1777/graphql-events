import styled from 'styled-components';
import { plainBlack, plainWhite, green, lightGreen } from '../../../assets/styles/constants';

const StyledButton = styled.button`
  background: ${green};
  font: inherit;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  color: ${plainWhite};
  font-size: 1rem;
  box-shadow: 1px 1px 5px ${plainBlack};
  cursor: pointer;
  &:hover {
    background: ${lightGreen};
  }
`;

export { StyledButton };