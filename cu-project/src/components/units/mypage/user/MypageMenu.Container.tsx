import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import {
  FETCH_MAINSTACK,
  FETCH_MY_USER,
  FETCH_USER_ORDER_BY_SCORE,
} from "./Mypage.Queries";
import MypageMenuUI from "./MypageMenu.Presenter";
import { CREATE_POINT } from "./point/UserPoint.Queries";

export default function MypageMenu() {
  useAuth();
  const [isModal, setIsModal] = useState(false);
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const { data } = useQuery(FETCH_MY_USER);
  const { data: mainstack } = useQuery(FETCH_MAINSTACK);
  const { data: rankData } = useQuery(FETCH_USER_ORDER_BY_SCORE);
  const [createPoint] = useMutation(CREATE_POINT);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const onClickMove = (path: string) => () => {
    router.push(`/${path}`);
  };

  const onChangeAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
  };

  const onClickOkBtn = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    // 생략 가능
    const IMP = window.IMP;
    IMP.init("imp12744039"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "Point",
        amount,
        buyer_email: data?.fetchmyuser.email,
        buyer_name: data?.fetchmyuser.name,
        buyer_tel: data?.fetchmyuser.phonenumber,
        // m_redirect_url: 모바일 결제시 돌아갈 주소!
      },
      async (rsp) => {
        console.log(rsp);
        // callback
        if (rsp.success) {
          const result = await createPoint({
            variables: { amount, impUid: rsp.imp_uid },
          });

          router.push("/mypage");
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <MypageMenuUI
      mainstack={mainstack}
      data={data}
      rankData={rankData}
      isModal={isModal}
      onClickMove={onClickMove}
      onClickModal={onClickModal}
      onChangeAmount={onChangeAmount}
      onClickOkBtn={onClickOkBtn}
    />
  );
}
