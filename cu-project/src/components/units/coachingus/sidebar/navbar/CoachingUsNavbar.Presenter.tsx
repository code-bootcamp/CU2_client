import { ICoachingUsNavbarUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsNavbar.Style";

export default function CoachingUsNavbarUI(props: ICoachingUsNavbarUIProps) {
  return (
    <S.Wrapper>
      <S.Title>CoachingUs</S.Title>
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus")}
        isCurrent={props.currentPath === "/coachingus"}
      >
        CoachingUs
      </S.Sidenav>
      <Blank width="100px" />
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus/coaches")}
        isCurrent={props.currentPath.includes("/coachingus/coaches")}
      >
        Coaches
      </S.Sidenav>
      <Blank width="100px" />
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus/columns")}
        isCurrent={props.currentPath.includes("/coachingus/columns")}
      >
        Columns
      </S.Sidenav>
      <Blank width="100px" />
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus/comments")}
        isCurrent={props.currentPath.includes("/coachingus/comments")}
      >
        Comments
      </S.Sidenav>
      <Blank width="100px" />
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus/coach-register")}
        isCurrent={props.currentPath === "/coachingus/coach-register"}
      >
        Coach Register
      </S.Sidenav>
    </S.Wrapper>
  );
}
