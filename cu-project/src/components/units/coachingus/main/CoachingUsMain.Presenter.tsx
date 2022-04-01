import { ICoachingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import Banner from "../banner/Banner.Container";
import CoachingUsSidebarLeft from "../sidebar/CoachingUsSidebar.Container";
import CoachesCardPage from "./coachescard/CoachesCard.Container";
import * as S from "./CoachingUsMain.Style";
import ColumnsCardPage from "./columnscard/ColumnsCard.Container";

export default function CoachingUsMainUI(props: ICoachingUsMainUIProps) {
  return (
    <S.Wrapper>
      <Blank height="50px" />
      <Banner />
      <Blank height="40px" />
      <S.CoachingUsMainBody>
        <S.LeftSideBar>
          <CoachingUsSidebarLeft />
        </S.LeftSideBar>
        <S.LandingBody>
          <Blank height="50px" />
          <S.BodyForSidebar>
            <CoachesCardPage />
          </S.BodyForSidebar>
        </S.LandingBody>
        <Blank height="120px" />
        <ColumnsCardPage />
      </S.CoachingUsMainBody>
    </S.Wrapper>
  );
}
