import { IRegisterUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./Register.Style";

export default function RegisterUI(props: IRegisterUIProps) {
  return (
    <S.Wrapper>
      <S.Logo src="/CU2_LOGO.png" />
      <S.RegisterForm onSubmit={props.handleSubmit(props.onClickRegister)}>
        <p>Sign Up</p>
        <Blank height="10px" />
        <S.RegisterLabel>
          Name
          <S.RegisterInput type="text" {...props.register("name")} />
          {props.formState.errors.name?.message}
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          Email Address
          <S.RegisterInput type="email" {...props.register("email")} />
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          Password
          <S.RegisterInput type="password" {...props.register("password")} />
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          Confirm Password
          <S.RegisterInput
            type="password"
            {...props.register("checkPassword")}
          />
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          Phone Number
          <S.RegisterInput type="text" />
          <Blank height="30px" />
          <S.GetRegisterNum type="button">
            Get Authentication Number
          </S.GetRegisterNum>
          <Blank height="10px" />
          <S.RegisterInput
            type="text"
            placeholder="
Please enter the verification code "
          />
        </S.RegisterLabel>
        <Blank height="30px" />
        <S.CreateAccountBtn>Create Account</S.CreateAccountBtn>
      </S.RegisterForm>
      <S.FormContainer>
        <S.FormContainerBorder></S.FormContainerBorder>
      </S.FormContainer>
    </S.Wrapper>
  );
}
