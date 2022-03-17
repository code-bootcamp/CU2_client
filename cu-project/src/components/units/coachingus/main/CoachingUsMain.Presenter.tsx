import { ICoachingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsMain.Style";
import CoachingUsSidebarLeft from "../sidebar/left/CoachingUsSidebar.Container";
import CoachingUsSidebarRight from "../sidebar/right/CoachingUsSidebar.Container";
import RecCoachCardPage from "./reccoachcard/RecCoachCard.Container";

export default function CoachingUsMainUI(props: ICoachingUsMainUIProps) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebarLeft />
      </S.LeftSideBar>
      <S.LandingBody>
        <S.SearchBar />
        <Blank height="40px" />
        <RecCoachCardPage />
        <Blank height="40px" />
        <S.ContainerCoaches></S.ContainerCoaches>
        <Blank height="40px" />
        <S.ContainerColumns></S.ContainerColumns>
      </S.LandingBody>
      <S.RightSideBar>
        <CoachingUsSidebarRight />
      </S.RightSideBar>
    </S.Wrapper>
  );
}
