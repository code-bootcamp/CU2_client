import Blank from "../../../commons/Blank";
// import CodingUsLeftSidebar from "./left";
import CodingUsNavbar from "./navbar";
// import CodingUsRightSidebar from "./right";
import * as S from "./Sidebar.Style";
import SidebarUserInfo from "./userInfo";
export default function CodingUsSidebarUI() {
  return (
    <S.SidebarWrapper>
      <CodingUsNavbar />
      <Blank height="40px" />
      <SidebarUserInfo/>
    </S.SidebarWrapper>
  );
}

