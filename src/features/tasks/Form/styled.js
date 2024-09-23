import styled from "styled-components";

export const Wrapper = styled.form`
  margin-bottom: 10px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  margin: 10px 0;
  border: 2px solid #e2e1e1;
  height: 40px;
`;

export const Button = styled.button`
  margin: 10px 0;
  height: 40px;
  color: #ffffff;
  background-color: #008080;
  border: none;
  cursor: grab;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    background-color: #00b3b3;
  }

  &:focus {
    outline: 1px solid #000000;
  }
`;
