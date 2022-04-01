import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const AllWrapper = styled.div`
  margin: 100px 12.5% 0;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Web = styled.div`
  @media ${breakPoints.tablet && breakPoints.mobile} {
    display: none;
  }
`;

export const BlogHeader = styled.div`
  width: 90%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    width: 90%;
    flex-direction: column;
  }
`;
