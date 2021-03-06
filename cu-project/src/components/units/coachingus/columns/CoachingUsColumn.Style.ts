import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
// body best columns 영역
export const ColumnsBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;

  & > p {
    font-size: 24px;
    font-weight: 400;
  }
  padding: 0 0 50px 0px;
`;

export const CoachColumn = styled.div`
  font-size: 21px;
  font-weight: 400;
`;

export const ContainerColumnsListBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 385px;
  margin: 0 10px;
  height: fit-content;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 3px 15px 0 rgb(0 0 0 / 16%);
  cursor: pointer;

  :hover {
    background-color: #ea345a;
    color: white;
  }
`;

export const ColumnPicture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: white;
`;
export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  padding: 10px;
`;
export const ColumnTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
`;
export const ColumnShortenTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
`;

export const ColumnContents = styled.div`
  font-size: 14px;
  font-weight: lighter;
`;

export const ColumnFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;

  font-size: 14px;
`;
export const ColumnShortenContents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: lighter;
`;

// body columns 영역
export const ContainerColumnsBody = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1000px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 240px;
  margin: 0px 0px 50px 0;
  height: fit-content;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #ea345a;
    color: white;
  }
`;

export const ColumnsPicture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: #f6f5f5;
`;

export const WriteBtn = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;

  cursor: pointer;
`;
