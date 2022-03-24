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
  justify-content: center;
`;
export const CoachCard = styled.div`
  width: 250px;
  border-radius: 15px;
  height: fit-content;
  background-color: #f6f5f5;
`;
export const CardPicture = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  background-color: #333333;
`;
export const CardContents = styled.div`
  padding: 15px 15px 20px 15px;
  height: fit-content;
`;
export const ContentsTitle = styled.div`
  font-size: 21px;
`;
export const ContentsSubTitle = styled.div`
  display: flex;
  color: #333333;
  font-weight: lighter;
  & > p {
    color: black;
    font-weight: normal;
  }
`;
export const ContentsPersentage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const AnswerRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2px;
`;
export const RateText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 33%;
  bottom: -2%;
  z-index: 11;
  font-size: 11px;
  font-weight: lighter;
`;
export const ProfileBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const ContentsFollowBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #ea345a;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: none;

  :hover {
    background-color: black;
    font-weight: 600;
  }

  cursor: pointer;
`;

// coach profile body 영역
export const CoachProfileBody = styled.div`
  width: 800px;
`;
export const CoachActivity = styled.div``;

export const ActivityRankingBox = styled.div`
  height: 53px;
`;
export const ActivityRanking = styled.div`
  width: 62px;
  height: 62px;
  overflow: hidden;
  animation: fromTop 2s linear both;
  @keyframes fromTop {
    100% {
      height: 20px;
    }
    0% {
      height: 62px;
    }
  }
`;

export const ActivityRanking2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 62px;
  /* height: 62px; */
  overflow: hidden;
  animation: fromBottom 2s linear both;
  animation-direction: alternate;
  @keyframes fromBottom {
    from {
      height: 0px;
    }
    to {
      height: 42px;
    }
  }
`;
export const RateTextRanking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0%;
  bottom: 33px;
  font-size: 11px;
  font-weight: lighter;
`;
export const Rantangle = styled.div`
  width: 53px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  border-radius: 5px;
`;
export const RateTextActive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: lighter;
`;

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
  width: 100%;

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
