import { useRouter } from "next/router";
import { IFindUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import ConfirmModal from "../../../../commons/Modal/ConfirmModal/ConfirmModal";
import * as S from "./Find.Style";

export default function FindUI(props: IFindUIProps) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <S.FindCategory>
          <S.FindCategoryId
            onClick={props.onClickFindIdBtn}
            isFindCategory={props.isFindCategory}
          >
            이메일 찾기
          </S.FindCategoryId>
          <S.FindCategoryPassword
            onClick={props.onClickFindPasswordBtn}
            isFindCategory={props.isFindCategory}
          >
            비밀번호 찾기
          </S.FindCategoryPassword>
        </S.FindCategory>
        <S.Contents>
          {props.isFindCategory ? (
            <S.FindLabel>
              <Blank height="20px" />
              <S.PhoneNumber>
                이름
                <Blank height="10px" />
                <S.InputBox
                  value={props.name}
                  onChange={props.onChangeName}
                  placeholder="가입한 이름 입력"
                />
              </S.PhoneNumber>
              <Blank height="10px" />
              <S.PhoneNumber>
                전화번호
                <Blank height="10px" />
                <S.InputBox
                  value={props.phone}
                  onChange={props.onChangeInput}
                  placeholder="가입한 전화번호 입력"
                />
              </S.PhoneNumber>
              <Blank height="10px" />
              <S.AuthBoxContainer>
                인증번호
                <Blank height="10px" />
                <S.AuthBox>
                  <S.InputAuthBox
                    disabled={!props.isToken}
                    ref={props.codeRef}
                    placeholder="인증번호 입력"
                  />
                  <button onClick={props.onClickGetAuthNum}>인증번호</button>
                </S.AuthBox>
              </S.AuthBoxContainer>
              <Blank height="20px" />
              <button disabled={!props.isToken} onClick={props.onClickFind}>
                아이디 찾기
              </button>
            </S.FindLabel>
          ) : (
            <S.FindLabel>
              <Blank height="20px" />
              <S.PhoneNumber>
                이메일
                <Blank height="10px" />
                <S.InputBox2 placeholder="가입한 이메일 입력" />
              </S.PhoneNumber>
              <Blank height="10px" />
              <S.PhoneNumber>
                전화번호
                <Blank height="10px" />
                <S.InputBox
                  value={props.phone}
                  onChange={props.onChangeInput}
                  placeholder="가입한 전화번호 입력"
                />
              </S.PhoneNumber>
              <Blank height="10px" />
              <S.AuthBoxContainer>
                인증번호
                <Blank height="10px" />
                <S.AuthBox>
                  <S.InputAuthBox2
                    disabled={!props.isToken}
                    ref={props.codeRef}
                    placeholder="인증번호 입력"
                  />
                  <button onClick={props.onClickGetAuthNum}>인증번호</button>
                </S.AuthBox>
              </S.AuthBoxContainer>
              <Blank height="20px" />
              <button disabled={!props.isToken} onClick={props.onClickFind}>
                비밀번호 찾기
              </button>
            </S.FindLabel>
          )}
        </S.Contents>
      </S.Container>
      {props.isModalOpen && (
        <ConfirmModal
          router={() => router.push("/login")}
          mainText="아래 아이디를 복사해주세요."
          list={props.myEmail}
          btnText="로그인 하러가기"
        />
      )}
    </S.Wrapper>
  );
}
