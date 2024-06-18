import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: right;
`;

export const Button = styled.button`
  color: #008080;
  background-color: #ffffff;
  border: none;
  cursor: grab;
  transition: 0.5s;

  &:hover {
    color: #00b3b3;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: #9f9d9d;
      cursor: not-allowed;

      &:hover {
        color: #9f9d9d;
      }
    `}

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 0 10px 20px;
    grid-gap: 10px;
    display: grid;
    grid-template-columns: 1fr;
  }
`;
