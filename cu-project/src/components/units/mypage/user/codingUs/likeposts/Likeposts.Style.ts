import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const AllWrapper = styled.div`
  margin: 100px 12.5% 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Web = styled.div`
  @media ${breakPoints.tablet && breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;

export const Box = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;

export const CardWrapper = styled(RowWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media ${breakPoints.tablet && breakPoints.mobile} {
    justify-content: center;
  }
`;
