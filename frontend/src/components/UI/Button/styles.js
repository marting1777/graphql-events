import styled from 'styled-components';
import { plainBlack, plainWhite, blue, lightBlue } from '../../../assets/styles/constants';

const StyledButton = styled.button`
  background: ${blue};
  font: inherit;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  color: ${plainWhite};
  font-size: 1.2rem;
  box-shadow: 0px 0px 2px 1px ${plainBlack};
  cursor: pointer;
  margin-left: ${props => props.marginLeft ? '1rem' : '0'};
  outline: none;
  &:hover {
    background: ${lightBlue};
  }
`;

export { StyledButton };