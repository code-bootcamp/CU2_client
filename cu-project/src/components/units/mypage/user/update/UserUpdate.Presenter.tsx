import { IUserUpdateUI } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserUpdate.Style";

export default function UserUpdateUI(props: IUserUpdateUI) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"회원 정보 변경"} />
        <Blank height="30px" />
        <S.Box>
          <S.InfoBox>
            <p>이메일</p>
            {props.userInfo?.email}
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>이름</p>
            {props.userInfo?.name}
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>비밀번호</p>
            <input
              type="password"
              onChange={props.onChangePassword}
              placeholder="비밀번호"
            />
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>닉네임</p>
            <input
              type="text"
              onChange={props.onChangeNickName}
              placeholder={props.userInfo?.nickname}
              disabled={props.isVerify}
            />
            <button onClick={props.onClickVerifyNicName}>
              {props.isVerify ? `다시 등록하기` : `중복확인`}
            </button>
          </S.InfoBox>

          <Blank height="20px" />
          <S.InfoBox>
            <p>연락처</p>
            <input
              type="text"
              placeholder={props.userInfo?.phonenumber}
              onChange={props.onChangePhone}
            />
            <button onClick={props.onClickSendToken}>인증번호 받기</button>
          </S.InfoBox>
          <Blank height="20px" />
          <S.InfoBox>
            <p>인증번호</p>
            <input
              type="text"
              disabled={props.tokenResult}
              onChange={props.onChangeToken}
            />
            <button onClick={props.onClickCheckToken}>
              {props.tokenResult ? `인증 완료` : `인증번호 확인`}
            </button>
          </S.InfoBox>
          <Blank height="50px" />
          <button onClick={props.onClickUpdate}>유저정보 변경</button>
          <Blank height="10px" />
          <button onClick={props.onClickMove("/mypage/user/update/password")}>
            비밀번호 변경
          </button>
        </S.Box>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
