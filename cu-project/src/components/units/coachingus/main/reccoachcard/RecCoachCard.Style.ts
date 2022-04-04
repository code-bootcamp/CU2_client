import styled from "@emotion/styled";

// RecommnedCoachList 영역

export const ContainerRecommendCoach = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  min-height: 200px;

  padding: 0px 20px;
  & > p {
    color: white;
    font-size: 34px;
    font-weight: 400;
  }
`;

export const Block = styled.div`
  min-width: 100vw;
  min-height: 65%;
  position: absolute;
  z-index: 2;
`;
export const ContainerRecommendCoachBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecommendCoach = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;

  width: 550px;
  height: 380px;

  margin: 20px 20px;
  box-shadow: 0px 4px 4px 0px #00000040;

  animation: ${({ number, isStart }) =>
    isStart && `fadeIn ${number} ease-in-out`};
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: scale(1.03) translate(0, -20px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(70px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }

  cursor: pointer;

  @media screen and (max-width: 1440px) {
    width: 390px;
    height: 285px;
  }
`;
export const ProfileWapper = styled.div`
  width: 275px;
  height: 100%;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1440px) {
    width: 195px;
  }
`;
export const CoachProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-width: 50%;
  padding: 20px 10px 10px 10px;
  @media screen and (max-width: 1440px) {
    padding: 10px 15px;
  }
`;
export const RecommendCoachHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CoachTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const CoachCor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  @media screen and (max-width: 1440px) {
    font-size: 21px;
  }
`;
export const CoachSubCor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  font-weight: lighter;
  & > div:first-child {
    font-size: 16px;
    font-weight: 400;
  }
  & > div {
    font-size: 14px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
    & > p {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const RecommendCoachPicture = styled.img`
  background-image: url(${({ imgCover }) => imgCover});
  background-size: cover;
  min-width: 50%;
  height: 100%;
  /* border-radius: 100%; */
  background-color: #c4c4c4;
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100%;
`;
export const CoachTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: fit-content; */
  color: #bdbdbd;
  font-size: 14px;
  border-radius: 20px;
  padding: 2px 10px 0 10px;
  margin: 5px 5px 0 0px;
  border: 1px solid #c4c4c4;

  @media screen and (max-width: 1440px) {
    font-size: 12px;
    padding: 2px 10px 0 10px;
  }
`;
export const RecommendCoachInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;
  font-weight: 200;
`;
export const CoachInfoFollower = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const CoachInfoScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
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

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  border-top: 1px solid #c4c4c4;
`;

export const CoachFollowBtn = styled.button`
  width: 50%;
  height: 100%;
  background-color: white;
  border: none;
  border-right: 1px solid #c4c4c4;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const CoachDetailBtn = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 0 0 5px 0;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;
