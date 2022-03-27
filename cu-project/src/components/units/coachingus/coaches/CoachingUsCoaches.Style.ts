import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 0 50px 300px;
`;
// SideBar 영역

export const LeftSideBar = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
  min-height: 100vh;
  position: absolute;
  left: 0;
`;

export const CoachessBody = styled.div`
  min-width: 800px;
  padding: 0 0 50px 0;
  & > p {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const PeriodTags = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
export const Tag = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 20px;
  padding: 5px 20px;
  margin: 0 20px 0 0;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  color: ${({ isCurrent }) => (isCurrent ? "white" : "black")};
  background-color: ${({ isCurrent }) => (isCurrent ? "#7918f2" : "white")};
  :hover {
    color: white;
    background-color: #7918f2;
  }
`;
