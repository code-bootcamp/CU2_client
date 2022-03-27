import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Columns.Style";

export default function ColumnsUI() {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"내 칼럼 보기"} />
        <S.BlogHeader>
          <h2>전체글 53</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
