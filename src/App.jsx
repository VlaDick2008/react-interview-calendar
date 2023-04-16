import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CalendarWheel from './components/CalendarWheel';
import CalendarGrid from './components/CalendarGrid';

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 740px;
  margin: auto;
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: 740px) {
    width: 100vw;
    margin: 0;
  }
`;

export const CalendarGridContext = React.createContext();

const App = () => {
  const calendarSlider = React.useRef();
  const carouselSlider = React.useRef();

  const [markDelete, setMarkDelete] = React.useState(0);

  return (
    <StyledWrapper>
      <CalendarGridContext.Provider
        value={{ markDelete, setMarkDelete, calendarSlider, carouselSlider }}
      >
        <Header />
        <CalendarWheel />
        <CalendarGrid />
        <Footer />
      </CalendarGridContext.Provider>
    </StyledWrapper>
  );
};

export default App;
