import { EventContainer, EventTitle, EventUlList, EventLi } from './styles';

function Event({ data }) {
  return (
    <EventContainer>
      <EventTitle>{data?.title}</EventTitle>
      <EventUlList>
        <EventLi>{data?.description}</EventLi>
        <EventLi>$ {data?.price}</EventLi>
        <EventLi>{data?.date}</EventLi>
        <EventLi>{data?.creator?.email}</EventLi>
      </EventUlList>
    </EventContainer>
  );
}

export default Event;