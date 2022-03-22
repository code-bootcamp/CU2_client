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
                <Blank height="20px" />

                <S.RecommendCoachPosition></S.RecommendCoachPosition>
                <S.RecommendCoachTags>
                  {coach.profile.tags.map((tag, index) => (
                    <S.CoachTag key={index}>{tag}</S.CoachTag>
                  ))}
                </S.RecommendCoachTags>
                <Blank height="40px" />
                <S.RecommendCoachInfo>
                  <S.CoachInfoFollower>
                    <S.IconSizeControl>
                      <MdOutlineLocalParking
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "white",
                          background: "black",
                          borderRadius: "100%",
                        }}
                      />
                    </S.IconSizeControl>
                    <Blank width="8px" />
                    {getMoney(coach.profile.followers)}명
                  </S.CoachInfoFollower>
                  <Blank width="10px" />
                  <S.CoachInfoScore>
                    <IoPersonCircle
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "100%",
                      }}
                    />
                    <Blank width="8px" />
                    {getMoney(coach.profile.score)}점
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
