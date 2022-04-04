import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

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
export const Box = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  & span {
    color: #dbdbdb;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
`;
