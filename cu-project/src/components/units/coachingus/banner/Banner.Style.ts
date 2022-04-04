import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  padding: 10px 20px;
  height: 700px;
  background-image: url("/coverPage.jpeg");
  background-size: cover;

  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  @media screen and (max-width: 1440px) {
    height: 500px;
    padding: 10px 20px;
    width: 1440px;
  }
`;
