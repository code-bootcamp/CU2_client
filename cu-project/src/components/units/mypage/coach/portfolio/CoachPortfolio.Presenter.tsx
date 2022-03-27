import { CoachPageNav } from "../../../../commons/Mypage/MypageNav";
import CoachpageMenu from "../CoachpageMenu.Container";
import * as S from "./CoachPortfolio.Style";

export default function CoachPortfolioUI() {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu="포트폴리오 추가/수정" />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
