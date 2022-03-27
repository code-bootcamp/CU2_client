import * as S from "./Coached.Style";
import MypageMenu from "../../MypageMenu.Container";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";

export default function CoachedUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"내 코칭 보기"} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
