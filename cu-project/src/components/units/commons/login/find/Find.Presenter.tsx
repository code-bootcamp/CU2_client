import { IFindUIProps } from "../../../../../commons/types/types";
import * as S from "./Find.Style";

export default function FindUI(props: IFindUIProps) {
  return (
    <S.Wrapper>
      <S.Head>아이디/비밀번호 찾기</S.Head>
      <S.FindLabel>
        아이디 찾기
        <S.InputBox placeholder="가입한 전화번호 입력" />
        <S.AuthBox>
          <S.InputAuthBox placeholder="인증번호 입력" />
          <button>인증번호</button>
        </S.AuthBox>
        <button>아이디 찾기</button>
      </S.FindLabel>
      <S.FindLabel>
        비밀번호 찾기/변경
        <S.InputBox placeholder="아이디 입력" />
        <S.InputBox placeholder="가입한 전화번호 입력" />
        <S.AuthBox>
          <S.InputAuthBox placeholder="인증번호 입력" />
          <button>인증번호</button>
        </S.AuthBox>
        <button>비밀번호 찾기</button>
      </S.FindLabel>
    </S.Wrapper>
  );
}
