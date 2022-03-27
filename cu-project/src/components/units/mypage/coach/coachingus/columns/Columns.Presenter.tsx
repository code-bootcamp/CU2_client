import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Columns.Style";

export default function ColumnsUI() {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"내 칼럼 보기"} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
