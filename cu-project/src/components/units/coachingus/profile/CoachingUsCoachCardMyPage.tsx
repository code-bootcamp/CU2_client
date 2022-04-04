import React from "react";
import styled from "@emotion/styled";
import Blank from "../../../commons/Blank";
import { BsFillTriangleFill } from "react-icons/bs";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { useRouter } from "next/router";

const CoachCard = styled.div`
  width: 250px;
  border-radius: 15px;
  height: fit-content;
  background-color: #f6f5f5;

  cursor: pointer;
`;
const CardPicture = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  background-color: #333333;
`;
const CardContents = styled.div`
  padding: 15px 15px 20px 15px;
  height: fit-content;
`;
const ContentsTitle = styled.div`
  font-size: 21px;
`;
const ContentsSubTitle = styled.div`
  display: flex;
  color: #333333;
  font-weight: lighter;
  & > p {
    color: black;
    font-weight: normal;
  }
`;
const ProfileBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const ContentsFollowBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #ea345a;
  width: 90%;
  height: 35px;
  border-radius: 10px;
  border: none;

  :hover {
    background-color: black;
    font-weight: 600;
  }

  cursor: pointer;
`;
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
function CoachingUsCoachCardMyPage(props) {
  const router = useRouter();

  return (
    <CoachCard
      onClick={() => {
        router.push(`/coachingus/coaches/${props.coach.id}`);
      }}
    >
      <CardPicture />
      <CardContents>
        <ContentsTitle>
          {props.coach.coachProfile.orgName}{" "}
          {props.coach.coachProfile.department}
        </ContentsTitle>
        <Blank height="5px" />
        <ContentsSubTitle>
          <p>{props.coach.name} </p> &nbsp;| {props.coach.coachProfile.job}
        </ContentsSubTitle>
        <Blank height="20px" />
        <ProfileBtn>
          <ContentsFollowBtn>코치 페이지</ContentsFollowBtn>
        </ProfileBtn>
      </CardContents>
    </CoachCard>
  );
}

export default React.memo(CoachingUsCoachCardMyPage);
