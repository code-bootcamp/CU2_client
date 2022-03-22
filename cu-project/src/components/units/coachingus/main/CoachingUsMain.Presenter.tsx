import { ICoachingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsMain.Style";
import CoachingUsSidebarLeft from "../sidebar/CoachingUsSidebar.Container";
// import RecCoachCardPage from "./reccoachcard/RecCoachCard.Container";
import CoachesCardPage from "./coachescard/CoachesCard.Container";
import ColumnsCardPage from "./columnscard/ColumnsCard.Container";
// import CoachingUsNavbarPage from "../sidebar/navbar/CoachingUsNavbar.Container";
import Banner from "../banner/Banner.Container";
import Carousel from "./test";

export default function CoachingUsMainUI(props: ICoachingUsMainUIProps) {
  return (
    <S.Wrapper>
      <Banner />
      <Blank height="40px" />
      <S.CoachingUsMainBody>
        <S.LeftSideBar>
          <CoachingUsSidebarLeft />
        </S.LeftSideBar>
        <S.LandingBody>
          <Blank height="40px" />
          <CoachesCardPage />
          <Blank height="10px" />
          <ColumnsCardPage />
        </S.LandingBody>
        <S.RightSideBar>{/* <CoachingUsSidebarRight /> */}</S.RightSideBar>
      </S.CoachingUsMainBody>
    </S.Wrapper>
  );
}
