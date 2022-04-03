import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, IRegisterProps } from "../../../../commons/types/types";
import RegisterUI from "./Register.Presenter";
import {
  CHECK_TOKEN,
  CREATE_USER,
  SEND_TOKEN_TO_SMS,
} from "./Register.Queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationChecktokenArgs,
  IMutationCreateUserArgs,
  IMutationSendTokenTosmsArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상 입력해주세요.")
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
      "영문,숫자,특수 문자의 조합하여 작성해주세요."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
  checkPassword: yup
    .string()
    .min(8, "확인 비밀번호는 최소 8자리 이상 입력해주세요.")
    .required("확인 비밀번호는 필수 입력 사항입니다.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

export default function Register(props: IRegisterProps) {
  const [sendTokenToSMS] = useMutation<
    Pick<IMutation, "sendTokenTOSMS">,
    IMutationSendTokenTosmsArgs
  >(SEND_TOKEN_TO_SMS);
  const [checkToken] = useMutation<
    Pick<IMutation, "checktoken">,
    IMutationChecktokenArgs
  >(CHECK_TOKEN);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, formState, handleSubmit, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const [phone, setPhone] = useState("");
  const codeRef = useRef<HTMLInputElement>(null);
  const [isToken, setIsToken] = useState(false);
  const onClickRegister = async () => {
    try {
      if (!codeRef.current?.value) {
        alert("인증번호입력");
        return;
      }
      const authResult = await checkToken({
        variables: {
          phonenumber: phone,
          token: String(codeRef.current?.value),
        },
      });

      if (!authResult.data?.checktoken) {
        alert("인증실패");
        return;
      }
      const signUpResult = await createUser({
        variables: {
          name: getValues().name,
          nickname: getValues().name,
          email: getValues().email,
          password: getValues().password,
          phonenumber: phone,
        },
      });
      if (!signUpResult.data?.createUser.id) {
        alert("실패");
        return;
      }

      alert("회원가입 성공");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickGetAuthNum = (data: FormValues) => {
    if (phone.length < 1) {
      alert("번호를 입력해주세요.");
      return;
    }

    try {
      setIsToken(true);
      sendTokenToSMS({ variables: { phonenumber: phone } });
      alert("인증번호 전송");
    } catch (error: any) {}
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    const lastChar = input[input.length - 1];
    const isDelete = phone.length > input.length;
    if (!isDelete && isNaN(Number(lastChar))) return;
    if (!isDelete && (/^\d{3}$/.test(input) || /^\d{3}-\d{4}$/.test(input)))
      input = input + "-";
    if (!isDelete && /^\d{3}-\d{4}-\d{4}$/.test(phone)) return;
    if (isDelete && input.endsWith("-"))
      input = input.slice(0, input.lastIndexOf("-"));
    setPhone(input);
  };

  return (
    <RegisterUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      onClickGetAuthNum={onClickGetAuthNum}
      onChangeInput={onChangeInput}
      phone={phone}
      isToken={isToken}
      codeRef={codeRef}
    />
  );
}
