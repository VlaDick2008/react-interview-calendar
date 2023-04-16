import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styled/StyledButton';
import { CalendarGridContext } from '../App';

const StyledFooterWrapper = styled.div`
  border-top: 1px solid #d8d8d8;
  background-color: #ededed;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  width: 740px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 740px) {
    width: 100%;
  }
`;

const Footer = () => {
  const { markDelete } = React.useContext(CalendarGridContext);

  return (
    <StyledFooterWrapper>
      <StyledButton isSmall noPadding>
        Today
      </StyledButton>
      {markDelete > 0 && (
        <StyledButton isSmall noPadding>
          Delete
        </StyledButton>
      )}
    </StyledFooterWrapper>
  );
};

export default Footer;
