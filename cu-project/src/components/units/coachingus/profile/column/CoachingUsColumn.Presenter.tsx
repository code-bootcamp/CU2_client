import Blank from "../../../../commons/Blank";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import CoachingUsCoachCard from "../CoachingUsCoachCard";
import * as S from "./CoachingUsColumn.Style";

export default function CoachingUsColumnUI() {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <CoachingUsCoachCard />
        <Blank height="50px" />
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>
      <S.CoachProfileBody></S.CoachProfileBody>
    </S.Wrapper>
  );
}
