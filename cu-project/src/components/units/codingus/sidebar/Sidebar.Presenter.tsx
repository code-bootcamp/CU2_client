import Blank from "../../../commons/Blank";
import CodingUsLeftSidebar from "./left";
import CodingUsRightSidebar from "./right";
import * as S from "./Sidebar.Style";
export default function CodingUsSidebarUI() {
  return (
    <S.SidebarWrapper>
      <CodingUsLeftSidebar
        interestStacks={["JavaScript", "HTML5", "CSS3", "Python", "C++"]}
      />
      <Blank height="70px" />
      <CodingUsRightSidebar
        todayRanking={{ prev: 41, today: 30 }}
        totalRanking={{ prev: 120, today: 100 }}
        todayPercent={20}
        todayPoint={12}
      />
    </S.SidebarWrapper>
  );
}

/*
  todayPercent?: number;
  todayPoint?: number;
  todayRanking: { prev: number; today: number };
  totalRanking: { prev: number; today: number }; */
