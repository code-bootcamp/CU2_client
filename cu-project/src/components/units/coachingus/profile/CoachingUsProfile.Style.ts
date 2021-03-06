import styled from "@emotion/styled";
import { globalStyles } from "../../../../../src/commons/styles/globalStyles";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding-top: 100px;
  display: flex;
`;

// coach card 영역
export const CoachSidebar = styled.div`
  min-height: 100vh;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
export const AddSideBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

// coach profile body 영역
export const CoachProfileBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;
`;
export const CoachActivity = styled.div``;

export const CoachIntro = styled.div``;
export const CoachIntroTitle = styled.div`
  font-size: 21px;
  font-weight: normal;
`;
export const CoachIntroContents = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const CoachComments = styled.div`
  font-size: 21px;
  font-weight: 400;
`;
export const CommentsBody = styled.div`
  width: 810px;

  height: 175px;
  padding: 25px 150px 25px 25px;
  color: white;
  background-color: #7918f2;
`;
export const CommentsTitle = styled.div`
  font-weight: 300;
`;
export const CommentsContents = styled.div`
  font-size: 14px;
  font-weight: 200;
  overflow: hidden;
  padding: 0 20px;
`;
export const CommentsInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 200;
`;
export const CommentsInfoHits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid white;
`;
export const CommentsInfoLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid white;
`;
export const MoreBtn = styled.div`
  position: relative;
  bottom: 107px;
  left: 116%;
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

  width: 360px;

  height: fit-content;
  padding: 0;
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
