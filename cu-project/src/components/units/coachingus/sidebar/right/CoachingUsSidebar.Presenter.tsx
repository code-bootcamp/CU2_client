import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsSidebar.Style";

export default function CoachingUsSidebarUIUI() {
  return (
    <S.SideBarContainer>
      <S.SideBarContainerHeader>나의 활동</S.SideBarContainerHeader>
      <Blank height="30px" />
      <S.SideBarContainerBody>활동을 시작해 주세요.</S.SideBarContainerBody>
    </S.SideBarContainer>
  );
}
