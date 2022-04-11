import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../../../commons/types/generated/types";
import { LOGOUT, UPDATE_USER } from "../UserUpdate.Queries";

import UpdatePasswordUI from "./UpdatePassword.Presenter";
import { FETCH_MY_USER, LOGIN } from "./UpdatePassword.Queries";

export default function UpdatePassword() {
  const { data } = useQuery(FETCH_MY_USER);
  const [login] = useMutation(LOGIN);
  const [logout] = useMutation(LOGOUT);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const onChangeCheckNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckNewPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await login({
        variables: {
          email: data.fetchmyuser.email,
          password: password,
        },
      });
      const accessToken = result.data?.login;
      if (!accessToken) {
        alert("현재 비밀번호가 틀렸습니다.");
      } else if (newPassword === checkNewPassword) {
        await updateUser({
          variables: {
            name: data.fetchmyuser.name,
            nickname: data.fetchmyuser.nickname,
            phonenumber: data.fetchmyuser.phonenumber,
            password: newPassword,
          },
        });
        alert("회원정보 수정 완료!");
        logout();
        location.reload();
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <UpdatePasswordUI
      data={data}
      onClickLogin={onClickLogin}
      onChangePassword={onChangePassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangeCheckNewPassword={onChangeCheckNewPassword}
    />
  );
}
