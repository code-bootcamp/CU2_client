import { ICoachingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsMain.Style";
import CoachingUsSidebarLeft from "../sidebar/left/CoachingUsSidebar.Container";
import CoachingUsSidebarRight from "../sidebar/right/CoachingUsSidebar.Container";
import RecCoachCardPage from "./reccoachcard/RecCoachCard.Container";
import CoachesCardPage from "./coachescard/CoachesCard.Container";
import ColumnsCardPage from "./columnscard/ColumnsCard.Container";
import CoachingUsNavbarPage from "../navbar/CoachingUsNavbar.Container";

export default function CoachingUsMainUI(props: ICoachingUsMainUIProps) {
  return (
    <S.Wrapper>
      <CoachingUsNavbarPage />
      <S.CoachingUsMainBody>
        <S.LeftSideBar>
          <CoachingUsSidebarLeft />
        </S.LeftSideBar>
        <S.LandingBody>
          <S.SearchBar />
          <Blank height="40px" />
          <RecCoachCardPage />
          <Blank height="40px" />
          <CoachesCardPage />
          <Blank height="10px" />
          <ColumnsCardPage />
        </S.LandingBody>
        <S.RightSideBar>
          <CoachingUsSidebarRight />
        </S.RightSideBar>
      </S.CoachingUsMainBody>
    </S.Wrapper>
  );
}
