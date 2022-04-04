import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Blank from "../../../commons/Blank";
import { BsFillTriangleFill } from "react-icons/bs";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

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
const ContentsPersentage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const AnswerRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2px;
`;
const RateText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 33%;
  bottom: -2%;
  z-index: 1;
  font-size: 11px;
  font-weight: lighter;
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
      height: ${({ coachRank }) => (coachRank / 100) * 62 + "px"};
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
      height: ${({ coachRank }) => 62 - (coachRank / 100) * 62 + "px"};
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

const FETCH_COACH_USER = gql`
  query fetchCoachUser($userId: String!) {
    fetchCoachUser(userId: $userId) {
      id
      name
      score
      coachProfile {
        orgName
        orgType
        job
        department
      }
    }
  }
`;

const FETCH_COACH_ORDER_LIST = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      name
      score
      coachProfile {
        orgName
        orgType
      }
      role
      coachtag {
        tag
      }
    }
  }
`;

function CoachingUsCoachCard(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_COACH_USER, {
    variables: {
      userId: router.query.coachId,
    },
  });
  const { data: coachRankingList } = useQuery(FETCH_COACH_ORDER_LIST);

  const [coachRank, setCoachRank] = useState(0);

  const coachTotalList = coachRankingList?.fetchUserOrderbyscore.filter(
    (el) => el.role === "COACH"
  );

  const getMyRanking = () => {
    coachTotalList?.forEach((el, index) => {
      if (el.id === router.query.coachId) {
        setCoachRank(Math.ceil(((index + 1) / coachTotalList.length) * 100));
      }
    });
  };

  const coach = data?.fetchCoachUser;

  useEffect(() => {
    getMyRanking();
  });
  return (
    <CoachCard
      onClick={() => {
        if (props.setComponent) return props.setComponent(`/`);
        router.push("/coachingus/coaches/1");
      }}
    >
      <CardPicture></CardPicture>
      <CardContents>
        <ContentsTitle>{coach?.coachProfile?.orgName}</ContentsTitle>
        <Blank height="5px" />
        <ContentsSubTitle>
          <p>{coach?.name} </p> &nbsp;| {coach?.coachProfile.job}
        </ContentsSubTitle>
        <Blank height="15px" />
        <ContentsPersentage>
          <AnswerRate>
            <RateText>
              답변률 <p>90%</p>
            </RateText>
            <CoachingUsProfileRate coachRank={coachRank} />
          </AnswerRate>
          <ActivityRankingBox>
            <ActivityRanking coachRank={coachRank}>
              <BsFillTriangleFill
                style={{
                  width: "62px",
                  height: "62px",
                  color: "pink",
                }}
              />
            </ActivityRanking>
            <ActivityRanking2 coachRank={coachRank}>
              <BsFillTriangleFill
                style={{
                  width: "62px",
                  height: "62px",
                  color: "white",
                }}
              />
            </ActivityRanking2>
            <RateTextRanking>
              코치순위 <p>{coachRank}%</p>
            </RateTextRanking>
          </ActivityRankingBox>

          <Rantangle>
            <RateTextActive>
              활동점수 <p>{coach?.score}점</p>
            </RateTextActive>
          </Rantangle>
        </ContentsPersentage>
        <Blank height="20px" />
        <ProfileBtn>
          <ContentsFollowBtn>팔로우</ContentsFollowBtn>
          <ContentsFollowBtn
            onClick={(event) => {
              props.setComponent && props.setComponent("question");
              router.push(
                `/coachingus/coaches/${router.query.coachId}/question`
              );
              event.stopPropagation();
            }}
          >
            질문하기
          </ContentsFollowBtn>
        </ProfileBtn>
      </CardContents>
    </CoachCard>
  );
}

export default React.memo(CoachingUsCoachCard);
