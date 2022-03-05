import styled from "styled-components";

export const Menu = styled.div`
  width: 350px;
  background-image: linear-gradient(147deg, #000000 20%, #434343 74%);
  height: 100%;
  overflow: auto;
  height: 100vh;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: absolute;
  }
`;

export const Text = styled.p`
  display: block;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s;
  @media screen and (max-width: 700px) {
    float: left;
    font-size: 10px;
  }
`;
