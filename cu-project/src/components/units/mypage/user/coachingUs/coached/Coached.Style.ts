import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const AllWrapper = styled.div`
  margin: 100px 12.5% 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
