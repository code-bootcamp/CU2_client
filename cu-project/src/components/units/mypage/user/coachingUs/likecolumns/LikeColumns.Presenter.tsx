import * as S from "./LikeColumns.Style";
import MypageMenu from "../../MypageMenu.Container";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";

export default function LikeColumnsUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"Good한 칼럼"} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
