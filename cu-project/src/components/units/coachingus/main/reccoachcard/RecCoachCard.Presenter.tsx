import { ICoachingUsRecCoachCardUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./RecCoachCard.Style";
import getMoney from "../../../../../commons/libraries/getMoney";
import { MdOutlineLocalParking } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

export default function RecCoachCardUI(props: ICoachingUsRecCoachCardUIProps) {
  return (
    <S.ContainerRecommendCoach>
      <p>Best Coaches</p>
      {props.isStart && <S.Block />}
      <S.ContainerRecommendCoachBody>
        {props.recommendCoachList.map((coach, index) => (
          <S.RecommendCoach
            key={coach.id}
            number={(index + 1) * 800 + "ms"}
            isStart={props.isStart}
            onClick={props.moveToPage(`/coachingus/coaches/${coach.id}`)}
          >
            <S.RecommendCoachPicture></S.RecommendCoachPicture>
            <S.ProfileWapper>
              <S.CoachProfile>
                <S.RecommendCoachHeader>
                  <S.CoachTitle>
                    <S.CoachCor>{coach.corName}</S.CoachCor>
                    <Blank height="10px" />
                    <S.CoachSubCor>
                      <p>{coach.profile.name}&nbsp; </p> &nbsp;|&nbsp;
                      프론트엔드 5년차
                    </S.CoachSubCor>
                  </S.CoachTitle>
                </S.RecommendCoachHeader>

                <S.RecommendCoachTags>
                  {coach.profile.tags.map((tag, index) => (
                    <S.CoachTag key={index}>{tag}</S.CoachTag>
                  ))}
                </S.RecommendCoachTags>
                <Blank height="20px" />
                <S.RecommendCoachInfo>
                  <S.CoachInfoFollower>
                    <MdOutlineLocalParking
                      style={{
                        width: "2em",
                        height: "2em",
                        color: "white",
                        background: "black",
                        borderRadius: "100%",
                        marginBottom: "2px",
                        padding: "5px",
                      }}
                    />
                    <Blank width="8px" />
                    {getMoney(coach.profile.followers)}
                  </S.CoachInfoFollower>
                  <Blank width="10px" />
                  <S.CoachInfoScore>
                    <IoPersonCircle
                      style={{
                        width: "2.5em",
                        height: "2.5em",
                        marginBottom: "2px",
                        borderRadius: "100%",
                      }}
                    />
                    <Blank width="2px" />
                    {getMoney(coach.profile.score)}명
                  </S.CoachInfoScore>
                </S.RecommendCoachInfo>
              </S.CoachProfile>
              <S.ButtonWrapper>
                <S.CoachFollowBtn>팔로우</S.CoachFollowBtn>
                <S.CoachDetailBtn>코치페이지</S.CoachDetailBtn>
              </S.ButtonWrapper>
            </S.ProfileWapper>
          </S.RecommendCoach>
        ))}
      </S.ContainerRecommendCoachBody>
    </S.ContainerRecommendCoach>
  );
}
