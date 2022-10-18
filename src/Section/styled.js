import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
`;

export const StyledHeader = styled.header`
  border: 1px solid #eee;
  margin: 0;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Tittle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const Content = styled.div`
  border: 1px solid #eee;
`;
