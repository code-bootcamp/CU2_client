import styled from "@emotion/styled";

// RecommnedCoachList 영역

export const ContainerRecommendCoach = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  background-color: #333333;
  padding: 30px 25px;
  p {
    color: white;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const ContainerRecommendCoachBody = styled.div`
  display: flex;
`;

export const RecommendCoach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 20px;
  padding: 15px 20px;
  width: 230px;
  height: 350px;
  margin: 0 15px; ;
`;
export const RecommendCoachHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CoachTitle = styled.div``;
export const CoachCor = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const CoachSubCor = styled.div`
  font-weight: lighter;
`;
export const CoachFollowBtn = styled.button`
  color: white;
  text-align: center;
  background-color: black;
  padding-top: 1px;
  font-size: 12px;
  height: 25px;
  border-radius: 15px;
`;
export const RecommendCoachPicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #c4c4c4;
`;
export const RecommendCoachPosition = styled.div`
  font-weight: lighter;
`;
export const RecommendCoachName = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  font-size: 18px;
  div {
    font-size: 14px;
    font-weight: lighter;
  }
`;

export const RecommendCoachTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CoachTag = styled.div`
  width: fit-content;
  margin: 0 5px;
  border-radius: 15px;
  padding: 0 5px;
  border: 1px solid #c4c4c4;
`;
export const RecommendCoachInfo = styled.div`
  display: flex;
`;
export const CoachInfoFollower = styled.div`
  display: flex;
`;
export const CoachInfoScore = styled.div`
  display: flex;
`;
export const ContainerCoaches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 200px;
  border-radius: 20px;
  padding: 30px 25px;
`;
export const ContainerColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 200px;
  border-radius: 20px;
  padding: 30px 25px;
`;
