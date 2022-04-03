import { ICoachingUsCoachesCardUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachesCard.Style";
import getMoney from "../../../../../commons/libraries/getMoney";

export default function CoachesCardUI(props: ICoachingUsCoachesCardUIProps) {
  return (
    <S.ContainerCoaches>
      <S.CoachesTitle>취업에 관한 모든 궁금증들</S.CoachesTitle>
      <S.CoachesSubTitle>CU2 코치에게 물어보세요!</S.CoachesSubTitle>
      <Blank height="20px" />
      <S.ContainerCoachesListBody>
        {props.coachesList?.map((coach) => (
          <S.CoachList
            key={coach.id}
            onClick={props.moveToPage(`/coachingus/coaches/${coach.id}`)}
          >
            <S.CoachListHeader>
              <S.CoachTitle>
                <S.CoachCor>{coach.coachProfile?.orgName}</S.CoachCor>
                <S.CoachSubCor>{coach.coachProfile?.department}</S.CoachSubCor>
              </S.CoachTitle>
              <S.CoachFollowBtn>Follow</S.CoachFollowBtn>
            </S.CoachListHeader>
            <Blank height="10px" />
            <S.CoachListPicture></S.CoachListPicture>
            <Blank height="10px" />
            <S.CoachListPosition>
              {coach.coachProfile?.orgType}
            </S.CoachListPosition>
            <S.CoachListName>
              {coach.name} &nbsp; <div>coach</div>
            </S.CoachListName>
            {coach.coachtag?.tag && (
              <S.CoachListTags>
                {coach.coachtag?.tag.map((tag: string, index: number) => (
                  <S.CoachTag key={index}>{tag}</S.CoachTag>
                ))}
              </S.CoachListTags>
            )}
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
                {getMoney(coach?.score)}명
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
                {getMoney(coach?.score)}점
              </S.CoachInfoScore>
            </S.CoachListInfo>
          </S.CoachList>
        ))}
      </S.ContainerCoachesListBody>
      <Blank height="50px" />
      <S.MoreCoachesListBtn onClick={props.moveToPage(`/coachingus/coaches`)}>
        더 많은 코치보기 {">"}
      </S.MoreCoachesListBtn>
    </S.ContainerCoaches>
  );
}
