import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  padding: 10px 20px;
  height: 700px;
  background: linear-gradient(
    270deg,
    #2d0d55 0%,
    #6916d2 30.21%,
    #7918f2 51.04%,
    #7618eb 70.31%,
    #2d0d55 97.92%
  );

  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    height: 500px;
    padding: 10px 20px;
  }
`;
