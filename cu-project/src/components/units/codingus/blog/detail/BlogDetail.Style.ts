import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlogDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 1440px) {
    width: 1440px;
  }
`;