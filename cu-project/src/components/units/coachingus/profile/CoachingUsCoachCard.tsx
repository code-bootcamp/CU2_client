import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import useCoachRate from "../../../../commons/store/coachRate";
import Blank from "../../../commons/Blank";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { FETCH_MY_USER } from "./question/CoachingUsQuestion.Queries";

const CoachCard = styled.div`
  width: 250px;
  border-radius: 15px;
  height: fit-content;
  background-color: #f6f5f5;

  cursor: pointer;
`;
const LoadingCard = styled.div`
  width: 250px;
  min-height: 389px;
  border-radius: 15px;
  height: fit-content;
  background-color: #f6f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #c4c4c4;
  font-weight: 700;
`;

const CardPicture = styled.div`
  background-image: url("https://storage.googleapis.com/cucutoo-dev-bucket/TaeHoon.jpeg");
  background-size: cover;

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

const NoneBlank = styled.div`
  width: 100%;
  height: 1px;
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
  const answerRate = useCoachRate((state) => state.answerRate);

  const { data } = useQuery(FETCH_COACH_USER, {
    variables: {
      userId: router.query.coachId,
    },
  });
  const { data: coachRankingList } = useQuery(FETCH_COACH_ORDER_LIST);
  const { isCoach } = useAuthCoach();
  const { data: myData } = useQuery(FETCH_MY_USER);

  const [IsMyCoach, setIsMyCoach] = useState(false);
  const [coachRank, setCoachRank] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

    if (isCoach && myData?.fetchmyuser?.id === router.query.coachId) {
      setIsMyCoach(true);
    }
  }, [coachTotalList]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [coachRank, myData]);

  if (isLoading) {
    return <LoadingCard>Loading...</LoadingCard>;
  }

  return (
    <CoachCard
      onClick={() => {
        if (props.setComponent) return props.setComponent(`/`);
        router.push(`/coachingus/coaches/${router.query.coachId}`);
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
        {IsMyCoach && <Blank height="15px" />}
        <ContentsPersentage>
          <AnswerRate>
            <RateText>
              ????????? <p>{isNaN(answerRate) ? 0 : answerRate}%</p>
            </RateText>
            <CoachingUsProfileRate answerRate={answerRate} />
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
              ???????????? <p>{coachRank}%</p>
            </RateTextRanking>
          </ActivityRankingBox>

          <Rantangle>
            <RateTextActive>
              ???????????? <p>{coach?.score}???</p>
              {/* ???????????? <p>{coach?.score}???</p> */}
            </RateTextActive>
          </Rantangle>
        </ContentsPersentage>
        <Blank height="20px" />
        {!IsMyCoach ? (
          <ProfileBtn>
            <ContentsFollowBtn>?????????</ContentsFollowBtn>
            <ContentsFollowBtn
              onClick={(event) => {
                props.setComponent && props.setComponent("question");
                router.push(
                  `/coachingus/coaches/${router.query.coachId}/question`
                );
                event.stopPropagation();
              }}
            >
              ????????????
            </ContentsFollowBtn>
          </ProfileBtn>
        ) : (
          <NoneBlank />
        )}
      </CardContents>
    </CoachCard>
  );
}

export default React.memo(CoachingUsCoachCard);
