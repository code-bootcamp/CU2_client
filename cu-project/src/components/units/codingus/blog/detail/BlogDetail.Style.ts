import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

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

export const RowWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
`;

export const BtnLabel = styled.div`
  color: ${Color.medium};
  font-size: 16px;
  :hover{
    cursor: pointer;
  }
`;