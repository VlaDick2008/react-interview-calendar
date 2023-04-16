import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styled/StyledButton';
import { CalendarGridContext } from '../App';

import CalendarWheelItem from './CalendarWheelItem';

const datesNumbers = [...Array(32).keys()];
datesNumbers.shift();

const StyledCalendarWheelWrapper = styled.div`
  background-color: #ededed;
  padding: 10px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  padding-left: 60px;
`;

const StyledDatesCarouselSlider = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const StyledDatesCarouselWrapper = styled.div`
  display: flex;
  text-align: center;
  gap: 5px;
`;

const StyledMonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 740px) {
    padding: 5px 10px 0px;
  }
`;

const CalendarWheel = () => {
  const { calendarSlider, carouselSlider } = React.useContext(CalendarGridContext);

  const [dateId, setDateId] = React.useState(0);

  const scroll = (scrollOffset) => {
    carouselSlider.current.scrollLeft += scrollOffset;
    calendarSlider.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <StyledCalendarWheelWrapper>
        <StyledDatesCarouselSlider ref={carouselSlider}>
          <StyledDatesCarouselWrapper>
            {datesNumbers.map((date, i) => (
              <CalendarWheelItem
                key={date}
                date={date}
                i={i}
                dateOnClick={setDateId}
                dateId={dateId}
              />
            ))}
          </StyledDatesCarouselWrapper>
        </StyledDatesCarouselSlider>
        <StyledMonthWrapper>
          <StyledButton onClick={() => scroll(-330)} noPadding noActive>
            &lt;
          </StyledButton>
          <p>March 2019</p>
          <StyledButton onClick={() => scroll(330)} noPadding noActive>
            &gt;
          </StyledButton>
        </StyledMonthWrapper>
      </StyledCalendarWheelWrapper>
    </>
  );
};

export default CalendarWheel;
