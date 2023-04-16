import React from 'react';
import { StyledButton } from '../styled/StyledButton';
import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const StyledHeading = styled.h1`
  font-weight: normal;
`;

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeading>Interview Calendar</StyledHeading>
      <StyledButton onClick={() => prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss')}>
        +
      </StyledButton>
    </StyledHeaderWrapper>
  );
};

export default Header;
