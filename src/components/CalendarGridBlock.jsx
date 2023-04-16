import React from 'react';
import styled, { css } from 'styled-components';
import { CalendarGridContext } from '../App';

const StyledCalendarBlock = styled.div`
  border: 1px solid #d8d8d8;
  border-bottom: none;
  width: 47px;
  height: 40px;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
`;

const StyledCalendarBlockSelected = styled.div`
  padding: 2px;

  ${(props) =>
    props.isSelected &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

const StyledCalendarBlockBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebecff;
  ${(props) =>
    props.isMarkDelete &&
    css`
      background-color: #c2c6ff;
    `}
`;

const CalendarGridBlock = () => {
  const { setMarkDelete } = React.useContext(CalendarGridContext);

  const [localMarkDelete, setLocalMarkDelete] = React.useState(0);
  const [selected, setSelected] = React.useState(false);

  return (
    <StyledCalendarBlock
      onClick={() => {
        if (selected) {
          setLocalMarkDelete((prev) => (prev += 1));
          setMarkDelete((prev) => (prev += 1));
        } else {
          setSelected((prev) => !prev);
        }
      }}
    >
      <StyledCalendarBlockSelected isSelected={selected}>
        <StyledCalendarBlockBg isMarkDelete={localMarkDelete > 0}></StyledCalendarBlockBg>
      </StyledCalendarBlockSelected>
    </StyledCalendarBlock>
  );
};

export default CalendarGridBlock;
