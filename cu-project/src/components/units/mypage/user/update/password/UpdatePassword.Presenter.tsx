import Blank from "../../../../../commons/Blank";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import MypageMenu from "../../MypageMenu.Container";

import * as S from "./UpdatePassword.Style";

export default function UpdatePasswordUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"비밀번호 변경"} />
        <Blank height="30px" />
        <S.Box>
          <h1>비밀번호 변경</h1>
          <S.InfoBox>
            <p>현재 비밀번호</p>
            <input type="password" onChange={props.onChangePassword} />
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>새 비밀번호</p>
            <input type="password" onChange={props.onChangeNewPassword} />
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>새 비밀번호 확인</p>
            <input type="password" onChange={props.onChangeCheckNewPassword} />
          </S.InfoBox>
          <Blank height="50px" />

          <button onClick={props.onClickLogin}>비밀번호 변경</button>
        </S.Box>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
