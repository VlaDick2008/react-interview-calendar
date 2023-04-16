import React from 'react';
import CalendarGridItem from './CalendarGridItem';
import styled from 'styled-components';
import { CalendarGridContext } from '../App';

const calendarTime = [...Array(25).keys()];

const StyledCalendarGrid = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 69vh;
  width: 100%;
  padding-top: 20px;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  @media (max-height: 1400px) {
    height: 100vh;
  }

  @media (max-height: 1200px) {
    height: 74vh;
  }

  @media (max-height: 860px) {
    height: 66vh;
  }

  @media (max-height: 740px) {
    height: 61vh;
  }

  @media (max-height: 670px) {
    height: 57vh;
  }

  @media (max-height: 600px) {
    height: 50vh;
  }
`;

const CalendarGrid = () => {
  const { calendarSlider } = React.useContext(CalendarGridContext);

  return (
    <StyledCalendarGrid ref={calendarSlider}>
      {calendarTime.map((time, i) => (
        <CalendarGridItem key={time} time={calendarTime[i]} />
      ))}
    </StyledCalendarGrid>
  );
};

export default CalendarGrid;
