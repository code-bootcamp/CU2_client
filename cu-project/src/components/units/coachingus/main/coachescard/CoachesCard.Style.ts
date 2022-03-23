import styled from "@emotion/styled";

// ContainerCoachesList 영역

export const ContainerCoaches = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  padding: 30px 25px;
`;

export const CoachesTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  font-weight: 600;
  font-size: 36px;
  color: #ea345a;
`;
export const CoachesSubTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 60px;
  text-align: center;
  color: #333333;
`;

export const ContainerCoachesListBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CoachList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  padding: 15px 20px;
  width: 230px;
  height: 350px;
  margin: 20px 30px;
  box-shadow: 0px 4px 4px 0px #00000040;

  cursor: pointer;

  :hover {
    background-color: #ea345a;
    color: white;
  }
`;
export const CoachListHeader = styled.div`
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
export const CoachListPicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #c4c4c4;
`;
export const CoachListPosition = styled.div`
  font-weight: lighter;
`;
export const CoachListName = styled.div`
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

export const CoachListTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CoachTag = styled.div`
  width: fit-content;
  margin: 0 5px 0 0;
  padding: 0 5px;
  border: 1px solid #c4c4c4;
  color: #bdbdbd;
  border-radius: 15px;
  padding: 2px 5px 0 5px;
  border: 1px solid #c4c4c4;
`;
export const CoachListInfo = styled.div`
  display: flex;
`;
export const CoachInfoFollower = styled.div`
  display: flex;
`;
export const CoachInfoScore = styled.div`
  display: flex;
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
  background: #ea345a;

  cursor: pointer;
`;
