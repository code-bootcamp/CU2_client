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
      {/* <CodingUsLeftSidebar
        interestStacks={["JavaScript", "HTML5", "CSS3", "Python", "C++"]}
      />
      <Blank height="70px" />
      <CodingUsRightSidebar
        todayRanking={{ prev: 41, today: 30 }}
        totalRanking={{ prev: 120, today: 100 }}
        todayPercent={20}
        todayPoint={12}
      /> */}
    </S.SidebarWrapper>
  );
}

