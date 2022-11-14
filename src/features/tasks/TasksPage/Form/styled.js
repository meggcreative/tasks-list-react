import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  } ;
`;

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 40%);
  }
`;
