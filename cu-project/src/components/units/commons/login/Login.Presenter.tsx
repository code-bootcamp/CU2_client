import { ILoginUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./Login.Style";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Wrapper>
      <S.Logo src="https://blog.kakaocdn.net/dn/bdcEzt/btqwO6vBvi1/4rXyAZ3e2s0QSbxFDuEh7k/img.jpg" />
      <S.RegisterForm onSubmit={props.handleSubmit(props.onClickLogin)}>
        <Blank height="10px" />
        <S.RegisterInput
          type="email"
          placeholder="이메일"
          {...props.register("email")}
        />
        {props.formState.errors.email?.message}
        <Blank height="10px" />
        <S.RegisterInput
          type="password"
          placeholder="비밀번호"
          {...props.register("password")}
        />
        {props.formState.errors.password?.message}
        <Blank height="10px" />
        <p>이메일 찾기 | 비밀번호 찾기 | 회원가입</p>
        <button>로그인</button>
        <Blank height="10px" />
        <S.SocialLogin>구글 로그인</S.SocialLogin>
        <Blank height="10px" />
        <S.SocialLogin>GitHub 로그인</S.SocialLogin>
        <Blank height="10px" />
        <S.SocialLogin>카카오 로그인</S.SocialLogin>
        <Blank height="10px" />
        <S.SocialLogin>네이버 로그인</S.SocialLogin>
      </S.RegisterForm>
    </S.Wrapper>
  );
}
