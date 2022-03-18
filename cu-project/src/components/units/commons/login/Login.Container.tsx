import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, ILoginProps } from "../../../../commons/types/types";
import LoginUI from "./Login.Presenter";
import { LOGIN_USER } from "./Login.Queries";
import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상 입력해주세요.")
    .max(16, "비밀번호는 최대 16자리까지 입력해주세요.")
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
      "영문,숫자,특수 문자의 조합하여 작성해주세요."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function Login(props: ILoginProps) {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickLogin = async (data: FormValues) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      if (accessToken) {
        router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <LoginUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
}
