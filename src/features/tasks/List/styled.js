import styled, { css } from "styled-components";

export const TasksList = styled.ul`
  margin-top: 0;
  padding: 20px;
  background-color: #ffffff;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: 0.5s;
  cursor: grab;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: #119e11;

      &:hover {
        background-color: #15c615;
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: #a81a1a;

      &:hover {
        background-color: #d91e1e;
      }
    `}
`;
