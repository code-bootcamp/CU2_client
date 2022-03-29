import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import { CoachingSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Comments.Style";

export default function CommentsUI() {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"내 코칭 보기"} />
        <S.BlogHeader>
          <h2>전체글 53</h2>
          <CoachingSearchBar />
        </S.BlogHeader>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
