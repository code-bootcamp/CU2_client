import * as S from "./LikeColumns.Style";
import MypageMenu from "../../MypageMenu.Container";
import MyPageNav from "../../../../../commons/Mypage/MypageNav";

export default function LikeColumnsUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <MyPageNav menu={"Good한 칼럼"} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
