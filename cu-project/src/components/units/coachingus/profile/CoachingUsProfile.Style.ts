import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

// coach card 영역
export const CoachSidebar = styled.div`
  min-height: 100vh;
  min-width: 300px;
  display: flex;
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
export const CoachComments = styled.div``;
export const CoachColumn = styled.div``;
