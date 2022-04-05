import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import { CoachingUsColumnUICoachPage } from "../../../../coachingus/columns/CoachingUsColumn.Presenter";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Columns.Style";

export default function ColumnsUI(props) {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"내 칼럼 보기"} />
        <S.BlogHeader>
          <h2>전체글 {props.data?.fetchMyColumn.length}</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          <CoachingUsColumnUICoachPage data={props.data} />
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
