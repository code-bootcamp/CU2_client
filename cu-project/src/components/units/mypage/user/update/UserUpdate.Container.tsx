import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import useStore from "../../../../../commons/store/store";
import {
  IMutation,
  IMutationChecktokenArgs,
  IMutationSendTokenTosmsArgs,
  IMutationUpdateUserArgs,
} from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserEditUI from "./UserUpdate.Presenter";
import {
  CHECK_TOKEN,
  FETCH_USER_ORDER_BY_SCORE,
  LOGOUT,
  SEND_TOKEN_TO_SMS,
  UPDATE_USER,
} from "./UserUpdate.Queries";

export default function UserUpdate() {
  const router = useRouter();
  const userInfo = useStore((state) => state.userInfo);
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState<string>("");
  const [isVerify, setIsVerify] = useState(false);
  const [isToken, setIsToken] = useState(true);
  const [tokenResult, setTokenResult] = useState<boolean>(false);
  const [logout] = useMutation(LOGOUT);
  const [sendTokenToSMS] = useMutation<
    Pick<IMutation, "sendTokenTOSMS">,
    IMutationSendTokenTosmsArgs
  >(SEND_TOKEN_TO_SMS);
  const [checkToken] = useMutation<
    Pick<IMutation, "checktoken">,
    IMutationChecktokenArgs
  >(CHECK_TOKEN);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_ORDER_BY_SCORE);
  const { moveToPage } = useMoveToPage();

  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const onClickVerifyNicName = () => {
    // if (data?.fetchAllUser.nickname.includes(nickName))
    if (
      data?.fetchUserOrderbyscore.map((el) => el.nickname).includes(nickName)
    ) {
      alert("중복된 닉네임입니다.");
    } else setIsVerify((prev) => !prev);
  };

  const onClickSendToken = () => {
    try {
      setIsToken(false);
      sendTokenToSMS({ variables: { phonenumber: String(phone) } });
      alert("인증번호 전송");
    } catch (error: any) {}
  };

  const onClickCheckToken = async () => {
    try {
      await checkToken({
        variables: {
          phonenumber: phone,
          token: token,
        },
      });
      setTokenResult(true);
      alert("인증 확인!");
    } catch (error) {
      alert(error);
    }
  };

  const onClickUpdate = async () => {
    if (tokenResult !== true) {
      alert("정보 변경을 할 수 없습니다.");
      return;
    }
    try {
      await updateUser({
        variables: {
          name: userInfo?.name,
          nickname: nickName,
          phonenumber: phone,
          password: password,
        },
      });
      alert("회원정보 수정 완료!");
      // logout();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <UserEditUI
      isToken={isToken}
      isVerify={isVerify}
      tokenResult={tokenResult}
      moveToPage={moveToPage}
      userInfo={userInfo}
      setPhone={setPhone}
      onChangeNickName={onChangeNickName}
      onChangePassword={onChangePassword}
      onChangePhone={onChangePhone}
      onChangeToken={onChangeToken}
      onClickVerifyNicName={onClickVerifyNicName}
      onClickSendToken={onClickSendToken}
      onClickCheckToken={onClickCheckToken}
      onClickUpdate={onClickUpdate}
    />
  );
}
