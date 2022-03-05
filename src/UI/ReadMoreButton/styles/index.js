import styled from "styled-components";

export const ReadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 20px 40px;
  border: 3px solid black;
  background-color: transparent;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
