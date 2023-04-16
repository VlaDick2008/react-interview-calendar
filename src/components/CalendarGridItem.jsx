import React from 'react';
import styled from 'styled-components';

import CalendarGridBlock from './CalendarGridBlock';

const calendarBlocks = [...Array(31).keys()];

const StyledCalendarTime = styled.div`
  line-height: 0;
  padding-left: 10px;
  padding-right: 5px;
  color: #bababa;
`;

const StyledCalendarBlockWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const CalendarGridItem = ({ time }) => {
  return (
    <div style={{ display: 'flex' }}>
      <StyledCalendarTime>{time >= 10 ? time : '0' + time}&#58;00</StyledCalendarTime>
      <StyledCalendarBlockWrapper>
        {calendarBlocks.map((block) => (
          <CalendarGridBlock key={block}></CalendarGridBlock>
        ))}
      </StyledCalendarBlockWrapper>
    </div>
  );
};

export default CalendarGridItem;
