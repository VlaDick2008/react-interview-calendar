import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
