import { ILoginUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./Login.Style";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Wrapper>
      <S.Logo src="/CU2_LOGO.png" />
      <S.RegisterForm onSubmit={props.handleSubmit(props.onClickLogin)}>
        <Blank height="10px" />
        <S.InputLabelText>Welcome!</S.InputLabelText>
        <Blank height="10px" />
        <S.RegisterInput
          type="email"
          placeholder="EMAIL ADDRESS"
          {...props.register("email")}
        />
        {props.formState.errors.email?.message}
        <Blank height="10px" />
        <S.RegisterInput
          type="password"
          placeholder="PASSWORD"
          {...props.register("password")}
        />
        <Blank height="10px" />
        {props.formState.errors.password?.message}

        <S.LoginBtn type="submit">
          <p>Sign In</p>
        </S.LoginBtn>

        <Blank height="10px" />
        <S.LoginBtn onClick={props.moveToPage("/register")}>
          <p>Sign Up</p>
        </S.LoginBtn>
        <Blank height="10px" />

        <S.FindBtnBox>
          <S.FindIDBtn onClick={props.moveToPage("/login/find")}>
            이메일 찾기
          </S.FindIDBtn>{" "}
          &nbsp;&nbsp;| &nbsp;
          <S.FindPasswordBtn onClick={props.moveToPage("/login/find")}>
            비밀번호 찾기
          </S.FindPasswordBtn>
        </S.FindBtnBox>
      </S.RegisterForm>
      <Blank height="40px" />
      <S.SocialLogin>Login with Google</S.SocialLogin>
      <Blank height="15px" />
      <S.SocialLogin>Login with GitHub</S.SocialLogin>
      <Blank height="15px" />
      <S.SocialLogin>Login with Kakao</S.SocialLogin>
    </S.Wrapper>
  );
}
