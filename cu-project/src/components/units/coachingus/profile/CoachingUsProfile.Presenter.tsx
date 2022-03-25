import { ICoachingUsProfileUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsProfile.Style";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { BsFillTriangleFill } from "react-icons/bs";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import CoachingUsCoachCard from "./CoachingUsCoachCard";
import CoachingUsCommentsPage from "./comments/CoachingUsComments.Container";
import CoachingUsCoachPage from "./coach/CoachingUsCoach.Container";
import CoachingUsColumnPage from "./column/CoachingUsColumn.Container";

export default function CoachingUsProfileUI(props: ICoachingUsProfileUIProps) {
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
      <S.CoachProfileBody>
        {props.query.components === undefined && <CoachingUsCoachPage />}
        {props.query.components === "comments" && <CoachingUsCommentsPage />}
        {props.query.components === "columns" && <CoachingUsColumnPage />}
      </S.CoachProfileBody>
    </S.Wrapper>
  );
}
