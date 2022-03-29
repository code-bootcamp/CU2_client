import Blank from "../../../../commons/Blank";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserUpdate.Style";

export default function UserUpdateUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"회원 정보 변경"} />
        <Blank height="30px" />
        <S.Box>
          <S.InfoBox>
            <p>이메일</p>jaemin@cucutoo.com
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>이름</p>김재민
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>닉네임</p>
            <input type="text" placeholder="이전 닉네임" />
            <button>중복확인</button>
          </S.InfoBox>
          <Blank height="20px" />

          <S.InfoBox>
            <p>연락처</p>
            <input type="text" placeholder="등록된 연락처" />
            <button>인증번호 받기</button>
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>인증번호</p>
            <input type="text" disabled />
            <button disabled>인증번호 확인</button>
          </S.InfoBox>
          <Blank height="50px" />
          <button>유저정보 변경</button>
          <Blank height="10px" />
          <button onClick={props.moveToPage("/mypage/user/update/password")}>
            비밀번호 변경
          </button>
        </S.Box>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
