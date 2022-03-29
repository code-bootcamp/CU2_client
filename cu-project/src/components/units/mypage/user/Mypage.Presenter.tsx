import { IMyPageUIProps } from "../../../../commons/types/types";
import MypageMenu from "./MypageMenu.Container";
import * as S from "./Mypage.Style";

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <S.Wrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
    </S.Wrapper>
  );
}
