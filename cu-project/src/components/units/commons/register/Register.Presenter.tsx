import { IRegisterUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./Register.Style";

export default function RegisterUI(props: IRegisterUIProps) {
  return (
    <S.Wrapper>
      <S.Logo src="https://blog.kakaocdn.net/dn/bdcEzt/btqwO6vBvi1/4rXyAZ3e2s0QSbxFDuEh7k/img.jpg" />
      <S.RegisterForm onSubmit={props.handleSubmit(props.onClickRegister)}>
        <p>이메일로 회원가입</p>
        <S.RegisterLabel>
          이름
          <S.RegisterInput type="text" {...props.register("name")} />
          {props.formState.errors.name?.message}
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          이메일
          <S.RegisterInput type="email" {...props.register("email")} />
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          패스워드
          <S.RegisterInput type="password" {...props.register("password")} />
        </S.RegisterLabel>
        <Blank height="10px" />
        <S.RegisterLabel>
          패스워드 확인
          <S.RegisterInput
            type="password"
            {...props.register("checkPassword")}
          />
        </S.RegisterLabel>
        <S.RegisterLabel>
          휴대전화
          <S.RegisterInput type="text" />
          <Blank height="10px" />
          <button type="button">인증번호 받기</button>
          <Blank height="10px" />
          <S.RegisterInput
            type="text"
            placeholder="인증번호를 입력해주세요."
            disabled
          />
        </S.RegisterLabel>
        <Blank height="10px" />
        <button>가입하기</button>
      </S.RegisterForm>
    </S.Wrapper>
  );
}
