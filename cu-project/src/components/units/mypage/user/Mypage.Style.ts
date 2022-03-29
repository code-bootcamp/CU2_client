import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  margin: 100px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Web = styled.div`
  @media ${breakPoints.mobile} {
    width: 260px;
  }
`;
