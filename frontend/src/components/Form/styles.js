import styled from 'styled-components';
import { plainBlack } from '../../assets/styles/constants';

const FormAuth = styled.form`
  width: 30rem;
  max-width: 80%;
  margin: 5rem auto;
  box-shadow: 0px 0px 3px 1px ${plainBlack};
  padding: 30px;
  border-radius: 4px;
`;

const FormControl = styled.div`
  margin-bottom: 1rem;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { FormControl, FormActions, FormAuth };