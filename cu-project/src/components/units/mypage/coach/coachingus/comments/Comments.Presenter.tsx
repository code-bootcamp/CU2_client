import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Comments.Style";

export default function CommentsUI() {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"내 칼럼 보기"} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
