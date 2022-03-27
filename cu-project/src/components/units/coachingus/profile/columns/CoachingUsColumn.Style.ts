import styled from "@emotion/styled";

export const CoachCommentsWrapper = styled.div``;

export const CoachCommentsTitle = styled.div`
  font-size: 21px;
  font-weight: normal;
  margin: 0 0 -30px 0;
`;

export const ContainerColumnsListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 800px;
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 360px;

  height: fit-content;
  padding: 0;
  margin-top: 50px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #7918f2;
    color: white;
  }
`;

export const ColumnPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #c4c4c4;
`;
export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  height: 140px;
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
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 3px;
  font-size: 14px;
`;
export const ColumnShortenContents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: lighter;
`;
export const ListMoreBtn = styled.div`
  position: relative;
  right: 140px;
  bottom: -50px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: white;
  color: black;
  font-size: 18px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }

  p {
    font-size: 28px;
  }
`;

export const ExtraBox = styled.div`
  display: flex;
  width: 100%;
`;
export const LikeInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const CommentsInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
