import { ICoachingUsRecCoachCardUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./RecCoachCard.Style";
import getMoney from "../../../../../commons/libraries/getMoney";
import { FaSpeakap } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

export default function RecCoachCardUI(props: ICoachingUsRecCoachCardUIProps) {
  return (
    <S.ContainerRecommendCoach>
      <p>Best Coaches</p>
      {props.isStart && <S.Block />}
      <S.ContainerRecommendCoachBody>
        {props.recommendCoachList?.map((coach, index) => (
          <S.RecommendCoach
            key={coach.id}
            number={(index + 1) * 800 + "ms"}
            isStart={props.isStart}
          >
            <S.RecommendCoachPicture />
            <S.ProfileWapper>
              <S.CoachProfile>
                <S.RecommendCoachHeader>
                  <S.CoachTitle>
                    <S.CoachCor>{coach.coachProfile.orgName}</S.CoachCor>
                    <Blank height="10px" />
                    <S.CoachSubCor>
                      <div>{coach.name}</div>
                      <div>{coach.coachProfile?.department}</div>
                    </S.CoachSubCor>
                  </S.CoachTitle>
                </S.RecommendCoachHeader>

                <S.RecommendCoachTags>
                  {coach.coachtag?.tag?.map((tag, index) => (
                    <S.CoachTag key={index}>{tag}</S.CoachTag>
                  ))}
                </S.RecommendCoachTags>
                <Blank height="20px" />
                <S.RecommendCoachInfo>
                  <S.CoachInfoFollower>
                    <FaSpeakap
                      style={{
                        width: "2.5em",
                        height: "2.5em",
                        borderRadius: "100%",
                        marginRight: "-5px",
                        // marginBottom: "2px",
                      }}
                    />
                    <Blank width="8px" />
                    {getMoney(coach?.score)}???
                  </S.CoachInfoFollower>
                  <Blank width="10px" />
                  <S.CoachInfoScore>
                    <IoPersonCircle
                      style={{
                        width: "2.5em",
                        height: "2.5em",
                        color: "black",
                        marginBottom: "2px",
                        borderRadius: "100%",
                      }}
                    />
                    <Blank width="2px" />
                    {getMoney(coach?.followernumber)}???
                  </S.CoachInfoScore>
                </S.RecommendCoachInfo>
              </S.CoachProfile>
              <S.ButtonWrapper>
                <S.CoachFollowBtn
                  id={coach.id}
                  onClick={props.onClickFollowBtn}
                >
                  ?????????
                </S.CoachFollowBtn>
                <S.CoachDetailBtn
                  onClick={props.moveToPage(`/coachingus/coaches/${coach.id}`)}
                >
                  ???????????????
                </S.CoachDetailBtn>
              </S.ButtonWrapper>
            </S.ProfileWapper>
          </S.RecommendCoach>
        ))}
      </S.ContainerRecommendCoachBody>
    </S.ContainerRecommendCoach>
  );
}
