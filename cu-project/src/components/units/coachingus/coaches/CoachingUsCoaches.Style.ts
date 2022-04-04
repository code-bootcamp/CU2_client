import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

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
  width: 800px;

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

export const MyRanking = styled.div``;
export const BestRankingCoach = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;
export const BestRankingCoaches = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  width: 250px;
  padding: 0 0 30px 0;

  :hover {
    background-color: #ea345a;
    color: white;
  }
  cursor: pointer;
`;
export const ImageBox = styled.div`
  width: 100%;
  padding: 0 0 0 30px;
  display: flex;
`;
export const CoachPicture = styled.div`
  background-color: #c4c4c4;
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;
export const CoachName = styled.div``;
export const CoachScore = styled.div``;
export const RestRankingBox = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #bdbdbd;
`;
export const RestRanking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  border-top: 1px solid #bdbdbd;

  background-color: ${({ isMyInfo }) => (isMyInfo ? "#EA345A" : "none")};
  color: ${({ isMyInfo }) => (isMyInfo ? "white" : "black")};
`;

export const TrophyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  font-weight: bolder;
`;
export const MyText = styled.div`
  color: #e9345a;
`;
export const RestRanking2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  border: 1px solid #bdbdbd;
`;

export const RankingNum = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    font-size: 18px;
    font-weight: bolder;
  }
  p {
    font-size: 14px;
    font-weight: normal;
  }
`;
export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;
export const IsUpDown = styled.div``;
export const RestCoachPicture = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c4c4c4;
  border-radius: 100%;
`;
export const RestCoachText = styled.div`
  p:first-child {
    font-size: 16px;
    color: ${({ isMyInfo }) => (isMyInfo ? "white" : "black")};
  }
  p {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const RestCoachScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;
export const ScoreBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100px;
`;
export const ChangeRate = styled.div``;
export const MyPageBtn = styled.button`
  all: unset;
  background-color: #333333;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;

  :hover {
    background-color: ${({ isMyInfo }) => (isMyInfo ? "white" : "#e9345a")};
    color: ${({ isMyInfo }) => (isMyInfo ? "#e9345a" : "white")};
  }
`;
export const MyPageBtn2 = styled.button`
  all: unset;
  background-color: #e9345a;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;

  :hover {
    background-color: white;
    color: #e9345a;
    border: 1px solid #e9345a;
  }
`;
export const BottonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadMoreBtn = styled.button`
  all: unset;
  font-size: 32px;
`;
