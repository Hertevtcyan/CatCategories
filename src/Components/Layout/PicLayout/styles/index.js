import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 505px) {
    margin-top: 200px;
  }
`;

export const PicturesBlocK = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 700px) and (min-width: 320px) {
    margin: 0 auto;
  }
`;

export const Pictures = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
  @media only screen and (max-width: 700px) {
    width: 100px;
    height: 100px;
    margin: 5px;
  }
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
