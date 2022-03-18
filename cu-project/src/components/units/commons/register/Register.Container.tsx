import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, IRegisterProps } from "../../../../commons/types/types";
import RegisterUI from "./Register.Presenter";
import {} from "./Register.Queries";

const schema = yup.object().shape({
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(10, "비밀번호는 최소 10자리 이상 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  checkPassword: yup
    .string()
    .min(10, "확인 비밀번호는 최소 10자리 이상 입력해주세요.")
    .required("확인 비밀번호는 필수 입력 사항입니다."),
});

export default function Register(props: IRegisterProps) {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickRegister = (data: FormValues) => {};

  return (
    <RegisterUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
    />
  );
}
