import { IRegisterUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./Register.Style";

export default function RegisterUI(props: IRegisterUIProps) {
  return (
    <S.Wrapper>
      <S.Logo src="/CU2_LOGO.png" />
      <S.RegisterForm onSubmit={props.handleSubmit(props.onClickGetAuthNum)}>
        <p>Sign Up</p>
        <Blank height="10px" />
        <S.RegisterLabel>
          Name
          <S.RegisterInput type="text" {...props.register("name")} />
          {props.formState.errors.name?.message ? (
            <S.ErrorMessageBox>
              {props.formState.errors.name?.message}
            </S.ErrorMessageBox>
          ) : (
            <Blank height="20px" />
          )}
        </S.RegisterLabel>
        <S.RegisterLabel>
          Email Address
          <S.RegisterInput type="email" {...props.register("email")} />
          {props.formState.errors.email?.message ? (
            <S.ErrorMessageBox>
              {props.formState.errors.email?.message}
            </S.ErrorMessageBox>
          ) : (
            <Blank height="20px" />
          )}
        </S.RegisterLabel>

        <S.RegisterLabel>
          Password
          <S.RegisterInput type="password" {...props.register("password")} />
          {props.formState.errors.password?.message ? (
            <S.ErrorMessageBox>
              {props.formState.errors.password?.message}
            </S.ErrorMessageBox>
          ) : (
            <Blank height="20px" />
          )}
        </S.RegisterLabel>

        <S.RegisterLabel>
          Confirm Password
          <S.RegisterInput
            type="password"
            {...props.register("checkPassword")}
          />
          {props.formState.errors.checkPassword?.message ? (
            <S.ErrorMessageBox>
              {props.formState.errors.checkPassword?.message}
            </S.ErrorMessageBox>
          ) : (
            <Blank height="20px" />
          )}
        </S.RegisterLabel>
        <Blank height="20px" />
        <S.RegisterLabel>
          Phone Number
          <S.RegisterInput
            type="text"
            onChange={props.onChangeInput}
            value={props.phone}
          />
          <Blank height="20px" />
          <S.GetRegisterNum>Get Authentication Number</S.GetRegisterNum>
          <Blank height="10px" />
          <S.RegisterInput
            type="text"
            placeholder="
Please enter the verification code "
            disabled={!props.isToken}
            ref={props.codeRef}
            onChange={() => {
              console.log(props.codeRef);
            }}
          />
          <Blank height="20px" />
        </S.RegisterLabel>
        <S.CreateAccountBtn
          disabled={!props.isToken}
          type="button"
          onClick={props.onClickRegister}
        >
          Create Account
        </S.CreateAccountBtn>
      </S.RegisterForm>
    </S.Wrapper>
  );
}
