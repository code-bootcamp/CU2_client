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

      <S.ContainerCoachesListBody>
        {props.coachesList.map((coach) => (
          <S.CoachList key={coach.id}>
            <S.CoachListHeader>
              <S.CoachTitle>
                <S.CoachCor>{coach.corName}</S.CoachCor>
                <S.CoachSubCor>{coach.subCorName}</S.CoachSubCor>
              </S.CoachTitle>
              <S.CoachFollowBtn>Follow</S.CoachFollowBtn>
            </S.CoachListHeader>
            <Blank height="10px" />
            <S.CoachListPicture></S.CoachListPicture>
            <Blank height="10px" />
            <S.CoachListPosition>직책</S.CoachListPosition>
            <S.CoachListName>
              {coach.profile.name} &nbsp; <div>coach</div>
            </S.CoachListName>
            <S.CoachListTags>
              {coach.profile.tags.map((tag, index) => (
                <S.CoachTag key={index}>{tag}</S.CoachTag>
              ))}
            </S.CoachListTags>
            <Blank height="10px" />
            <S.CoachListInfo>
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
            </S.CoachListInfo>
          </S.CoachList>
        ))}
      </S.ContainerCoachesListBody>
    </S.ContainerCoaches>
  );
}
