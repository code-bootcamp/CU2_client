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

export const MyPageButton = styled.button`
  background-color: gray;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ChargeBox = styled.div`
  width: 90%;
  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 16px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 10px;
  }
`;

export const ColumnDate = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnContent = styled.div`
  width: 40%;
  text-align: center;
`;

export const ColumnScore = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnAllScore = styled.div`
  width: 20%;
  text-align: center;
`;
