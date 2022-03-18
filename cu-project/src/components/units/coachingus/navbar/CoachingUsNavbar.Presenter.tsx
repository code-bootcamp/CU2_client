import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsNavbar.Style";

export default function CoachingUsNavbarUI(props) {
  return (
    <S.Wrapper>
      <S.CoachingUs
        onClick={props.moveToPage("/coachingus")}
        isCurrent={props.currentPath === "/coachingus"}
      >
        CoachingUs
        {props.currentPath === "/coachingus" && <S.BoldLine />}
      </S.CoachingUs>
      <Blank width="100px" />
      <S.Coach
        onClick={props.moveToPage("/coachingus/coach")}
        isCurrent={props.currentPath === "/coachingus/coach"}
      >
        Coach
        {props.currentPath === "/coachingus/coach" && <S.BoldLine />}
      </S.Coach>
      <Blank width="100px" />
      <S.Column
        onClick={props.moveToPage("/coachingus/column")}
        isCurrent={props.currentPath === "/coachingus/column"}
      >
        Column
        {props.currentPath === "/coachingus/column" && <S.BoldLine />}
      </S.Column>
      <Blank width="100px" />
      <S.CoachRegister
        onClick={props.moveToPage("/coachingus/coach-register")}
        isCurrent={props.currentPath === "/coachingus/coach-register"}
      >
        Coach Register
        {props.currentPath === "/coachingus/coach-register" && <S.BoldLine />}
      </S.CoachRegister>
    </S.Wrapper>
  );
}
