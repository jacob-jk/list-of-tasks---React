import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #ffffff;
`;

export const SectionBox = styled.div`
  border-bottom: 2px solid #e2e1e1;
  margin: 0 10px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
