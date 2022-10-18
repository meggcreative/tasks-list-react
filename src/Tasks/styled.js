import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid #eee;
  word-break: break-all;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  background-color: hsla(0, 100%, 50%, 0.69);
  transition: 1s;
  cursor: pointer;

  &:hover {
    background-color: hsla(0, 100%, 50%, 1);
  }

  &:active {
    background-color: hsla(0, 100%, 50%, 0.85);
  }

  ${({ changeDone }) =>
    changeDone &&
    css`
      background-color: hsl(120, 100%, 25%);

      &:hover {
        background-color: hsl(120, 100%, 30%);
      }
      &:active {
        background-color: hsl(120, 100%, 35%);
      }
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
