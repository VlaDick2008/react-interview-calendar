import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  color: red;
  border: none;
  padding: 10px;
  font-size: 32px;
  background-color: transparent;
  cursor: pointer;
  line-height: 20px;
  border-radius: 9999px;
  transition: background-color 0.1s;
  user-select: none;

  &:hover {
    background-color: #dbdbdb;
  }

  &:active {
    background-color: #cfcfcf;
  }

  @media (max-width: 740px) {
    padding: 0;
    &:active {
      background-color: transparent;
    }
    &:hover {
      background-color: transparent;
    }
  }

  ${(props) => (
    props.noPadding &&
      css`
        padding: 0;
      `,
    props.noActive &&
      css`
        &:active {
          background-color: transparent;
        }
      `,
    props.isSmall &&
      css`
        font-size: 18px;
      `
  )}
`;
