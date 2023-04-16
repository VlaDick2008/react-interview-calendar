import React from 'react';

import styled from 'styled-components';

const StyledDatesCarousel = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDateItem = styled.div`
  font-size: 24px;
  width: 42px;
  height: 42px;
  padding-top: 6px;
  margin-top: 7px;
  text-align: center;
  transition: all 0.1s;
  user-select: none;

  cursor: pointer;
  border-radius: 50%;
`;

const daysNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const CalendarWheelItem = ({ date, i, dateOnClick, dateId }) => {
  return (
    <StyledDatesCarousel
      key={date}
      onClick={() => {
        dateOnClick(i);
      }}
    >
      <div>{daysNames[i % daysNames.length]}</div>
      <StyledDateItem style={dateId === i ? { backgroundColor: 'red', color: 'white' } : {}}>
        {date}
      </StyledDateItem>
    </StyledDatesCarousel>
  );
};

export default CalendarWheelItem;
