import CodingUsLeftSidebar from "../../src/components/units/codingus/sidebar/left";
import Blank from "../../src/components/commons/Blank";
import CodingUsRightSideBar from "../../src/components/units/codingus/sidebar/right";
export default function ComponentTestPage() {
  return (
    <div>
      <Blank height="100px" />
      <CodingUsLeftSidebar
        interestStacks={["HTML", "CSS", "JavaScript", "Java", "Python", "C++"]}
      ></CodingUsLeftSidebar>
      <Blank height="100px" />
      <CodingUsRightSideBar
        todayPercent={1}
        todayPoint={22}
        todayRanking={{ prev: 44, today: 43 }}
        totalRanking={{ prev: 120, today: 100 }}
      ></CodingUsRightSideBar>
    </div>
  );
}
