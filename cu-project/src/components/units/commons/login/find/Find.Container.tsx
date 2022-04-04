import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, ChangeEvent, useRef, useState } from "react";
import { IFindProps } from "../../../../../commons/types/types";
import FindUI from "./Find.Presenter";
import { FETCH_USER } from "./Find.Queries";
import { CHECK_TOKEN, SEND_TOKEN_TO_SMS } from "./Find.Queries";

export default function Find(props: IFindProps) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USER);
  const [sendTokenToSMS] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkToken] = useMutation(CHECK_TOKEN);
  const [name, setName] = useState("");

  const [myEmail, setMyEmail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("userData", data);
  // const [email, setEmail] = useState("")
  // const [emailTextErr, setEmailTextErr] = useState(false)

  const codeRef = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState("");
  const [isToken, setIsToken] = useState(false);
  const [isFindCategory, setIsFindCategory] = useState(true);

  const onClickFindIdBtn = () => {
    setIsFindCategory(true);
  };
  const onClickFindPasswordBtn = () => {
    setIsFindCategory(false);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  // const checkEmail = (emailForm) => {
  //   const email = emailForm;
  //   const exptext =
  //     /^([\w\\.\\_\\-])*[a-zA-Z0-9]+([\w\\.\\_\\-])*([a-zA-Z0-9])+([\w\\.\\_\\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
  //   if (exptext.test(email) === false) {
  //     setEmailTextErr(true);
  //     return false;
  //   } else {
  //     setEmailTextErr(false);
  //     return true;
  //   }
  // };

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

  const onClickGetAuthNum = () => {
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

  const onClickFind = async () => {
    try {
      console.log(codeRef.current?.value);
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

      const findedName = data?.fetchAllUser.filter((user) => {
        if (user.name === name) {
          if (user.phonenumber !== phone)
            alert("입력한 전화번호가 일치하지 않습니다.");
        }
        return user.name === name && user.phonenumber === phone;
      });


      const result = findedName.map((el) => el.email);
      if (findedName.length > 0) setMyEmail(result);

      // router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (myEmail.length > 0) setIsModalOpen(true);
    console.log(myEmail);
  }, [myEmail]);

  return (
    <FindUI
      isFindCategory={isFindCategory}
      onClickFindIdBtn={onClickFindIdBtn}
      onClickFindPasswordBtn={onClickFindPasswordBtn}
      onChangeInput={onChangeInput}
      codeRef={codeRef}
      onClickFind={onClickFind}
      phone={phone}
      isToken={isToken}
      onClickGetAuthNum={onClickGetAuthNum}
      onChangeName={onChangeName}
      name={name}
      myEmail={myEmail}
      isModalOpen={isModalOpen}
    />
  );
}
