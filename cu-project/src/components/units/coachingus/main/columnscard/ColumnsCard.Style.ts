import styled from "@emotion/styled";
// ColumnsList 영역

export const ContainerColumnsList = styled.div`
  display: flex;
  min-width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  padding: 30px 25px;
  background: #fbfafa;
`;

export const ColumnsListTitle = styled.div`
  width: max-content;
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

export const ContainerColumnsListBody = styled.div`
  display: flex;
  justify-content: center;
  min-width: 800px;
  width: 1000px;
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;

  padding: 15px 20px;
  min-width: 230px;
  width: 100%;

  height: fit-content;
  margin: 20px 30px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 3px 15px 0 rgb(0 0 0 / 16%);
  cursor: pointer;

  :hover {
    background-color: #7918f2;
    color: white;
  }
`;

export const ColumnPicture = styled.div`
  background-image: url(${({ imgCover }) => imgCover});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  /* background-color: #c4c4c4; */
  border-radius: 15px;
`;
export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  /* background: red; */
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
  font-weight: lighter;
  color: #bdbdbd;
`;
export const ColumnShortenContents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: lighter;
`;

export const MoreCoachesListBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: lighter;
  cursor: pointer;
  width: 285px;
  height: 56px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  background: #7918f2;
`;
