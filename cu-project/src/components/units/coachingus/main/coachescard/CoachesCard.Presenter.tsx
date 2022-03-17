import { ICoachingUsMainUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachesCard.Style";
import getMoney from "../../../../commons/hooks/getMoney";

export default function CoachesCardUI(props: ICoachingUsMainUIProps) {
  return (
    <S.ContainerCoaches>
      <S.CoachesTitle>
        Coaches
        <S.MoreCoachesListBtn>더보기 {">"}</S.MoreCoachesListBtn>
      </S.CoachesTitle>

      <S.ContainerRecommendCoachBody>
        {props.coachesList.map((coach) => (
          <S.RecommendCoach key={coach.id}>
            <S.RecommendCoachHeader>
              <S.CoachTitle>
                <S.CoachCor>{coach.corName}</S.CoachCor>
                <S.CoachSubCor>{coach.subCorName}</S.CoachSubCor>
              </S.CoachTitle>
              <S.CoachFollowBtn>Follow</S.CoachFollowBtn>
            </S.RecommendCoachHeader>
            <Blank height="10px" />
            <S.RecommendCoachPicture></S.RecommendCoachPicture>
            <Blank height="10px" />
            <S.RecommendCoachPosition>직책</S.RecommendCoachPosition>
            <S.RecommendCoachName>
              {coach.profile.name} &nbsp; <div>coach</div>
            </S.RecommendCoachName>
            <S.RecommendCoachTags>
              {coach.profile.tags.map((tag, index) => (
                <S.CoachTag key={index}>{tag}</S.CoachTag>
              ))}
            </S.RecommendCoachTags>
            <Blank height="10px" />
            <S.RecommendCoachInfo>
              <S.CoachInfoFollower>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "gray",
                  }}
                />
                <Blank width="8px" />
                {getMoney(coach.profile.followers)}명
              </S.CoachInfoFollower>
              <Blank width="10px" />
              <S.CoachInfoScore>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "gray",
                  }}
                />
                <Blank width="8px" />
                {getMoney(coach.profile.score)}점
              </S.CoachInfoScore>
            </S.RecommendCoachInfo>
          </S.RecommendCoach>
        ))}
      </S.ContainerRecommendCoachBody>
    </S.ContainerCoaches>
  );
}
