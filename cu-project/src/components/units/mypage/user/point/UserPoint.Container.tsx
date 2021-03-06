import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import UserPointUI from "./UserPoint.Presenter";
import {
  CREATE_POINT,
  FETCH_MY_POINT_HISTORY_BY_PAGE,
  FETCH_MY_USER,
} from "./UserPoint.Queries";

export default function UserPoint() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [amount, setAmount] = useState(5000);
  const [startPage, setStartPage] = useState(0);
  const [createPoint] = useMutation(CREATE_POINT);
  const { data } = useQuery(FETCH_MY_USER);
  const { data: pointData, refetch } = useQuery(
    FETCH_MY_POINT_HISTORY_BY_PAGE,
    {
      variables: { page: startPage, perpage: 10 },
    }
  );
  const lastPage = Math.ceil(pointData?.fetchmypointHistorybypage.length / 10);

  console.log(startPage);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 0) return;
    setStartPage((prev) => prev - 10);
    // refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    // refetch({ page: startPage + 10 });
  };

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const onChangeAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
  };

  const onClickOkBtn = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
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
        // callback
        if (rsp.success) {
          const result = await createPoint({
            variables: { amount, impUid: rsp.imp_uid },
          });

          router.push("/mypage/user/point");
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <UserPointUI
      isModal={isModal}
      pointData={pointData}
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickModal={onClickModal}
      onClickOkBtn={onClickOkBtn}
      onChangeAmount={onChangeAmount}
    />
  );
}
