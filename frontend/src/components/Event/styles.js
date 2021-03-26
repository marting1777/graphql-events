import styled from 'styled-components';
import { blue, plainWhite } from '../../assets/styles/constants';

const EventContainer = styled.div`
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
`;

const EventTitle = styled.h2`
  margin: 0;
  display: block;
  text-align: center;
  background-color: ${blue};
  color: ${plainWhite};
  width: 100%;
  font-size: 1.6rem;
  padding: 10px 0;
`;

const EventUlList = styled.ul`
  list-style: none;
  padding: 10px;
  font-size: 1.2rem;
`;

const EventLi = styled.li`
  padding: 5px 0;
`;

export { EventContainer, EventTitle, EventUlList, EventLi };