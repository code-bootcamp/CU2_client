import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import * as S from "./CoachingUsCoaches.Style";

export default function CoachingUsCoachUI(props) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <S.CoachessBody>
        <p>Coach Ranking</p>
        <S.PeriodTags>
          {props.period.map((tag, index) => (
            <S.Tag
              onClick={() => {
                props.SendQuery(tag);
              }}
              isCurrent={
                props.isCurrentTag
                  ? props.isCurrentTag === tag
                  : tag === "Today"
              }
              key={index}
            >
              {tag}
            </S.Tag>
          ))}
        </S.PeriodTags>
      </S.CoachessBody>
    </S.Wrapper>
  );
}
