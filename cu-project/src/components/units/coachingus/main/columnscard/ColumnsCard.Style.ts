import styled from "@emotion/styled";
// ColumnsList 영역

export const ContainerColumnsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  padding: 30px 25px;
`;

export const ColumnsListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  font-weight: 600;
  font-size: 36px;
  color: #7918f2;
`;
export const ColumnsListSubTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 60px;
  text-align: center;
  color: #333333;
`;
export const MoreCoachesListBtn = styled.div`
  font-size: 14px;
  font-weight: lighter;
  cursor: pointer;
`;

export const ContainerColumnsListBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 20px;
  padding: 15px 20px;
  width: 230px;
  /* height: fit-content; */
  height: 240px;
  margin: 20px 15px;

  overflow: hidden;
  box-shadow: 4px 4px 4px 2px #dbdbdb40;
`;

export const ColumnPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 130px;
  background-color: #c4c4c4;
`;
export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 100%;
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

export const ColumnShortenContents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: lighter;
`;
