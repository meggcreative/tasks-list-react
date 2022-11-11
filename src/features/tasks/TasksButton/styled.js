import styled, { css } from "styled-components";

export const StyledTasksButton = styled.button`
  border: none;
  background-color: white;
  color: teal;
  font-size: 15px;
  transition: 0.5s;
  cursor: pointer;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ddd;
    `}
`;
