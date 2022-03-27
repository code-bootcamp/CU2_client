import styled from "@emotion/styled";

export const AllWrapper = styled.div`
  margin: 70px 360px 0;
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

export const FollowerBox = styled.div`
  width: 90%;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
