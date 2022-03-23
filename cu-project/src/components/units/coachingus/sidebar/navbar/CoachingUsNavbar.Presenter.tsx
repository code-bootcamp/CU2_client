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
        isCurrent={props.currentPath === "/coachingus/coaches"}
      >
        Coaches
      </S.Sidenav>
      <Blank width="100px" />
      <Blank height="30px" />
      <S.Sidenav
        onClick={props.moveToPage("/coachingus/column")}
        isCurrent={props.currentPath === "/coachingus/column"}
      >
        Column
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
